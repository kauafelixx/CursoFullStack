function criaHoraDosSegundos(segundos) {
const data = new Date(segundos * 1000);
return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
});

}



const relogio = document.querySelector('.relogio');
const iniciar = document.getElementById('start');
const pausar = document.getElementById('stop');
const zerar = document.getElementById('reset');
let segundos = 0;
let relogioInterval;

function iniciarRelogio(){
    relogioInterval = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}



iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausar');
    clearInterval(relogioInterval);
    iniciarRelogio();
})

pausar.addEventListener('click', function(event) {
     relogio.classList.add('pausar');
    clearInterval(relogioInterval);
})

zerar.addEventListener('click', function(event) {
clearInterval(relogioInterval);
relogio.innerHTML = '00:00:00';
segundos = 0;
})