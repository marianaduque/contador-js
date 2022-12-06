const contador = document.querySelector("#contador")
const btnAumentar= document.querySelector("#btn-aumentar")
const btnBorrar = document.querySelector("#btn-borrar")
const btnDisminuir = document.querySelector("#btn-disminuir")


btnDisminuir.addEventListener("click",function(){
    const valor = contador.innerText
    const newValor = valor-1
    contador.innerText = newValor
})

btnBorrar.addEventListener("click",function(){
    contador.innerText = 0
})

btnAumentar.addEventListener("click",function(){
    const valor = contador.innerText
    const newValor = parseInt(valor)
    contador.innerText = newValor+1
    
})



