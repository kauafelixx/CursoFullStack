function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpflimpo", {
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
if (typeof this.cpflimpo ===  'undefined') return false;
if (this.cpflimpo.length !== 11) return false;
if (this.isSequencia()) return false;

const cpfParcial = this.cpflimpo.slice(0, -2);
const digito1 = this.criaDigito(cpfParcial);
const digito2 = this.criaDigito(cpfParcial + digito1);

const novoCPF = cpfParcial + digito1 + digito2
  console.log(novoCPF);
return novoCPF === this.cpflimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
const cpfArray  = Array.from(cpfParcial)

let regressivo = cpfArray.length + 1;

const total = cpfArray.reduce((ac, val) => {

  ac += (regressivo * Number(val))
  regressivo--;
return ac ;
}, 0);
const digito = 11 - (total % 11);
return digito > 9 ? '0' : String(digito); 


};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpflimpo[0].repeat(this.cpflimpo.length) === this.cpflimpo;
}

const cpf = new ValidaCPF("456.756.321-23");

console.log(cpf.valida());
