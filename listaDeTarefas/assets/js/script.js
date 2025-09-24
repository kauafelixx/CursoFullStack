const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const listaTarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});

function limparInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function botaoApagarTarefa(li) {
  li.innerText += "  ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");

  li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  listaTarefas.appendChild(li);
  limparInput();
  botaoApagarTarefa(li);
  salvarTarefas();
}

btnAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = listaTarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);
  console.log(listaDeTarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
