
var numeroEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"))

var somaNotas = 0
var maiorNota = -Infinity
var menorNota = Infinity

var contador = 1
while (contador <= numeroEstudantes) {
    var nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"))
  
    somaNotas += nota;
    
   
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota
    }
    
    contador++
}

var mediaTurma = somaNotas / numeroEstudantes

console.log("Média da turma: " + mediaTurma.toFixed(2))
console.log("Maior nota: " + maiorNota.toFixed(2))
console.log("Menor nota: " + menorNota.toFixed(2))