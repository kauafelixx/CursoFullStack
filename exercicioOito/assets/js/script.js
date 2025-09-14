let dataHoje = new Date();
const result = document.getElementById("result");
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

result.innerHTML = dataHoje.toLocaleString('pt-BR', opcoes);
