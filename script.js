var enterButton = document.getElementById('enter')
var input = document.getElementById('userInput')
var ul = document.querySelector('ul')
var item = document.getElementsByTagName('li')

function inputLength(){
    return input.value.length 
}

function listLength(){
    return item.length
}

function createListElement(){
    var li = document.createElement('li') // criando elemento li
    li.appendChild(document.createTextNode(input.value)) //transforma o texto do campo de entrada no texto li
    ul.appendChild(li) //adicionar li ao ul
    input.value = '' //reseta o campo do texto

    //START STRIKETHROUGH
    function crossOut(){
        li.classList.toggle('done')
    }

    li.addEventListener('click', crossOut)
    //END STRIKETHROUGH

    //START AND DELETE BUTTON
    var dBtn = document.createElement('button')
    dBtn.appendChild(document.createTextNode('X'))
    li.appendChild(dBtn)
    dBtn.addEventListener('click', deleteListItem)
    //END AND DELETE BUTTON

    //ADD CLASS DELETE (DISPLAY:NONE)
    function deleteListItem(){
        li.classList.add('delete')
    }
    //END ADD CLASS DELETE
}

function addListAfterClick(){
    if (inputLength() > 0) { //o espaço não pode estar vazio ao criar li
        createListElement()
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13) { //adiciona li se pressionar a tecla enter
        createListElement()
    } 
}

enterButton.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterKeypress)