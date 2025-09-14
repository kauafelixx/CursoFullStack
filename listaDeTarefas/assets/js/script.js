const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');

function criaLi (){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
   if (e.keyCode ===  13 ){
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
   }
})

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function botaoApagarTarefa(li){
    li.innerText += '  ';
const botaoApagar = document.createElement('button');
botaoApagar.innerText = 'Apagar';
botaoApagar.setAttribute('class', 'apagar');
botaoApagar.setAttribute('title', 'Apagar esta tarefa');

li.appendChild(botaoApagar)
}

function criarTarefa(textoInput){
const li = criaLi();
li.innerText =  textoInput;
listaTarefas.appendChild(li);
limparInput();
botaoApagarTarefa(li)
}

btnAddTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target;

   if (el.classList.contains('apagar')) {
el.parentElement.remove();
}

})

