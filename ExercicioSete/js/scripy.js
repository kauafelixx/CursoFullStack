function meuEscopo(){
    const form = document.querySelector('.form');
const resultado = document.querySelector('.result')


function recebeMeuEvento(evento){
   evento.preventDefault();
   
   const nome = form.querySelector('.nome')
   const sobrenome=form.querySelector('.sobrenome')
   const peso= form.querySelector('.peso')
   const altura = form.querySelector('.altura')
   
   const recebePessoa = [nome.value, sobrenome.value, peso.value, altura.value]
   console.log(recebePessoa)
 resultado.innerHTML+=`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br /></p>`

}
form.addEventListener('submit', recebeMeuEvento);


}
meuEscopo();
