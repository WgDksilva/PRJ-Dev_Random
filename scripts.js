const botaoSorteio = document.querySelector(".botao-sorteio")

function gerarNúmero(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const numeroSortiado =document.querySelector(".input-n-sortiado")

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    numeroSortiado.innerHTML = result

}

botaoSorteio.addEventListener("click", gerarNúmero)
