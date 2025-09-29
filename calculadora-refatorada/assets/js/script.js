function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => { 
    this.cliqueBotoes();
   this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) =>  {
      if (e.keyCode === 13) {
        this.realizarConta();
        e.preventDefault();
      }
    });
  }


  (this.realizarConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("conta inválida");
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      this.display.value = "";
      return;
    }
  }),
    (this.apagarUm = () =>
      (this.display.value = this.display.value.slice(0, -1)));

  this.clearDisplay = () => (this.display.value = "");

  this.btnParaDisplay = (valor) => (this.display.value += valor);

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.apagarUm();
      }

      if (el.classList.contains("btn-igual")) {
        this.realizarConta();
      }
    });
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
