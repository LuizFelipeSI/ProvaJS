const pessoa = {
    nome: "Luiz",
    nascimento: "12/11/1997",
    cpf: "12652844660"
}

const aluno = {
    nome: "Luiz",
    nascimento: "12/11/1997",
    cpf: "12652844660",
    matricula: 1,
    notas: [5,6,8,9],
    calcularMedia
}

function calcularMedia(notas) {
    let soma = 0
    let media = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    media = soma / notas.length
    console.log("media do aluno: " + media)
}
aluno.calcularMedia(aluno.notas)