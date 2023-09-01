"use strict"; 
// A linha acima sem o comentário forçará um erro já no console.log do b
var a = 1;

function soma() {
    var b = 1;
    var c = 1;
    return a + b;
}

a = 2;
b = 2;
c = "2";
console.log(soma());
console.log(typeof b);
console.log(typeof c);

// Evita o problema com o hoisting - veja que a variável está
// sendo declarada depois de ser usada
var b = 0;
var c = 0;