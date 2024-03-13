function comentar() {
    console.log("deu certo")
}

function executaCallback(funcao) {
    return funcao()
}

executaCallback(comentar)