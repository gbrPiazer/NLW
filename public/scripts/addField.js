//Procurar o botão 
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)

//Executar uma função
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo
    fields.forEach(function(field) {
        //pega o field do momento e limpa
        field.value = ""

    })


    // Colocar na pagina : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}