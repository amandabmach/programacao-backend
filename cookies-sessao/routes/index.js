const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const username = req.session.username || 'Convidado';
    const tasks = req.session.tasks || [];
    res.render('index', { username, tasks });
});

router.post('/salvauser', (req, res) => {
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/');
});

router.post('/addtask', (req, res) => {
    const { task } = req.body;
    if (!req.session.username) {
        return res.status(401).send('Você precisa estar logado para adicionar tarefas.');
    }
    req.session.tasks = req.session.tasks || [];
    req.session.tasks.push(task);
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
