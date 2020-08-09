// procurar o botão 
document.querySelector("#add-time")
// quando lcicar no botao
.addEventListener('click', cloneField)


//executar uma açao
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        //pegar o field do momento
        field.value=""
    })

    // colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}