setInterval(function funcaoDoInterval() {
  function data() {
    let data = new Date();
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
    });
  }

  console.log(data());
}, 1000);

setTimeout(function(){
    clearInterval(funcaoDoInterval());
}, 10000);

