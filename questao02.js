function comentar() {
    console.log("deu certo")
}

function executaCallbackComDelay(funcao) {
    setTimeout(funcao, 5000)
}
executaCallbackComDelay(comentar)