const express = require('express');
const router = express.Router();

const USER_GROUPS = {
    admin: 'Administração',
    editor: 'Edição',
    guest: 'Visitantes',
};

router.get('/', (req, res) => {
    const username = req.session.username || 'Convidado';
    const userType = req.session.userType || 'guest';
    const groupName = USER_GROUPS[userType];
    const tasks = req.session.tasks || {};

    res.render('index', {
        username,
        groupName,
        tasks: tasks[groupName] || [],
    });
});

router.post('/salvauser', (req, res) => {
    const { username, userType } = req.body;

    req.session.username = username;
    req.session.userType = userType || 'guest';

    res.redirect('/');
});

router.post('/addtask', (req, res) => {
  if (!req.session.username) {
      return res.status(401).send('Você precisa estar logado para adicionar tarefas.');
  }

  const { task } = req.body;
  const userType = req.session.userType;
  const groupName = USER_GROUPS[userType];

  if (!groupName) {
      return res.status(403).send('Você não pertence a um grupo autorizado.');
  }

  req.session.tasks = req.session.tasks || {};
  req.session.tasks[groupName] = req.session.tasks[groupName] || [];
  req.session.tasks[groupName].push(task);

  res.redirect('/');
});

router.get('/random', (req, res) => {
    let randomNumber = req.cookies.randomNumber;
    if (!randomNumber) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        res.cookie('randomNumber', randomNumber);
    }
    res.send(`Número gerado: ${randomNumber}`);
});

let totalAccess = 0;
router.get('/contador', (req, res) => {
    totalAccess++;
    req.session.userAccess = (req.session.userAccess || 0) + 1;
    res.send(`Total de acessos: ${totalAccess}, Seus acessos: ${req.session.userAccess}`);
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
