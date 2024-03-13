function calcularMedia(notas) {
    let soma = 0
    let media = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    media = soma / notas.length
    return media
}

function calcularMediaGeral(alunos) {
    let mediaMenor = 0
    let mediaMaior = 0
    let media = 0
    let soma = 0
    for (const obj of alunos) {
        let mediaAluno = obj.calcularMedia(obj.notas)
        soma += mediaAluno
        if (mediaAluno > mediaMaior) {
             mediaMaior = mediaAluno
        }
        if (obj == alunos[0]) {
            mediaMenor = mediaAluno
        } else {
            if (mediaAluno < mediaMenor) {
                mediaMenor = mediaAluno
            }
        }
    }
    media = soma / alunos.length
    console.log("media geral: " + media)
    console.log("menor media: " + mediaMenor)
    console.log("maior media: " + mediaMaior)
}

const alunos = [
    {
        nome: "Luiz",
        nascimento: "12/11/1997",
        cpf: "12652844660",
        matricula: 1,
        notas: [5,0,0,6],
        calcularMedia
    },
    {
        nome: "Marcos",
        nascimento: "12/11/1997",
        cpf: "12652844660",
        matricula: 1,
        notas: [8,3,7,1],
        calcularMedia
    },
    {
        nome: "Maria",
        nascimento: "12/11/1997",
        cpf: "12652844660",
        matricula: 1,
        notas: [4,3,2,9],
        calcularMedia
    },
    {
        nome: "José",
        nascimento: "12/11/1997",
        cpf: "12652844660",
        matricula: 1,
        notas: [8,6,0,7],
        calcularMedia
    },
    {
        nome: "Larissa",
        nascimento: "12/11/1997",
        cpf: "12652844660",
        matricula: 1,
        notas: [5,9,6,8],
        calcularMedia
    },
]
calcularMediaGeral(alunos)