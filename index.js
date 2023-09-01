//"use strict"; 
// A linha acima sem o comentário forçará um erro já no console.log do b
var a;

a = 2;
b = 2;
c = "2";

console.log(soma());
console.log(typeof b);
console.log(typeof c);

function soma() {
    var b = 1;
    var c = 1;
    return a + b;
}

function soma2() {
    return b;
}

console.log(soma2());

// Evita o problema com o hoisting - veja que a variável está
// sendo declarada depois de ser usada
var b = 0;
var c = 0;

const d = "constante";
a = 3;
// A linha abaixo dá erro independente do escopo
// Não se pode reatribuir um valor para uma constante
//d = 4;

// E não se pode declarar uma constante sem se atribuir um valor
// para ela. Logo, a linha abaixo também dará erro se descomentada
// Isto independente do "use strict"; ou não 
// const e;