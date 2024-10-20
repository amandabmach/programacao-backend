function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function sequenciaMensagem(mensagem, n) {
    let resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += mensagem;
    }
    return resultado;
}

function calcularOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case 'adição':
            return valor1 + valor2;
        case 'subtração':
            return valor1 - valor2;
        case 'multiplicação':
            return valor1 * valor2;
        case 'divisão':
            return valor2 !== 0 ? valor1 / valor2 : null;
        default:
            return null;
    }
}

function tabuada(n) {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        resultado.push(n * i);
    }
    return resultado;
}

function inverterNumero(num) {
    let invertido = parseInt(num.toString().split('').reverse().join(''));
    return invertido;
}

function contarVogais(str) {
    let vogais = 'aeiouAEIOU';
    let contagem = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contagem++;
        }
    }
    return contagem;
}

function validarSequencia(sequencia) {
    let stack = [];
    let pares = {
        ')': '(',
        ']': '['
    };
    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === ']') {
            if (stack.pop() !== pares[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function gerarListaAleatoria(n) {
    let nomes = ['Ana', 'Carlos', 'Beatriz', 'Fernando', 'Mariana', 'Pedro'];
    let lista = [];
    for (let i = 1; i <= n; i++) {
        let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        let idadeAleatoria = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
        lista.push({ id: i, nome: nomeAleatorio, idade: idadeAleatoria });
    }
    return lista;
}

function calcularMediaIdades(lista) {
    let totalIdades = lista.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return totalIdades / lista.length;
}

function ordenarListaPorAtributo(lista, atributo) {
    return lista.sort((a, b) => {
        if (a[atributo] < b[atributo]) return -1;
        if (a[atributo] > b[atributo]) return 1;
        return 0;
    });
}

console.log("\n1) Questão - Fatorial\n");
console.log(fatorial(5)); 
console.log(fatorial(0)); 
console.log(fatorial(1)); 
console.log(fatorial(7));

console.log("\n2) Questão - Sequência de mensagens\n");
console.log(sequenciaMensagem("Olá", 3)); 
console.log(sequenciaMensagem("Teste", 1)); 
console.log(sequenciaMensagem("Mensagem", 0)); 

console.log("\n3) Questão - Operações Simples\n");
console.log(calcularOperacao(10, 5, 'adição')); 
console.log(calcularOperacao(10, 5, 'subtração')); 
console.log(calcularOperacao(10, 5, 'multiplicação')); 
console.log(calcularOperacao(10, 5, 'divisão')); 
console.log(calcularOperacao(10, 0, 'divisão')); 
console.log(calcularOperacao(10, 5, 'potência')); 

console.log("\n4) Questão - Tabuada\n");
console.log(tabuada(2));
console.log(tabuada(5));
console.log(tabuada(7));

console.log("\n5) Questão - Invertendo números\n");
console.log(inverterNumero(12345));
console.log(inverterNumero(9876));
console.log(inverterNumero(100));

console.log("\n6) Questão - Contar vogais\n");
console.log(contarVogais("Brocolis")); 
console.log(contarVogais("JavaScript")); 
console.log(contarVogais("AEIOU")); 
console.log(contarVogais("bcdfghjkl")); 

console.log("\n7) Questão - Validar sequência\n");
console.log(validarSequencia("(([]))")); 
console.log(validarSequencia("(([)])")); 
console.log(validarSequencia("()[]")); 
console.log(validarSequencia("([)]")); 

console.log("\n8) Questão - Lista Aleatória\n");
console.log(gerarListaAleatoria(3)); 
console.log(gerarListaAleatoria(1)); 

console.log("\n9) Questão - Média de Idades\n");
let listaTeste = [
    { id: 1, nome: 'Ana', idade: 25 },
    { id: 2, nome: 'Carlos', idade: 40 },
    { id: 3, nome: 'Beatriz', idade: 30 }
];
console.log(calcularMediaIdades(listaTeste)); 

console.log("\n10) Questão - Ordenar Lista por Atributo\n");
let listaTeste2 = [
    { id: 1, nome: 'Ana', idade: 25 },
    { id: 2, nome: 'Carlos', idade: 40 },
    { id: 3, nome: 'Beatriz', idade: 30 }
];
console.log(ordenarListaPorAtributo(listaTeste2, 'nome')); 
console.log(ordenarListaPorAtributo(listaTeste2, 'idade')); 