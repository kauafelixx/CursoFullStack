const form = document.querySelector("form");
const resultado = document.getElementById("resultado");
let classificacao = "";


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = Number(document.getElementById("peso").value);
  const height = Number(document.getElementById("altura").value);

  if (!weight) {
    resultado.innerHTML = "Preencha peso corretamente.";
    resultado.style.backgroundColor = "#F08080";
    return;
  }
    if (!height) {
    resultado.innerHTML = "Preencha altura corretamente.";
    resultado.style.backgroundColor = "#F08080";
    return;
  }

  const alturaQuadrado = height * height;
  const imc = weight / alturaQuadrado;

 if (imc < 18.5) {
  classificacao = "Underweight";
} else if (imc < 24.9) {
  classificacao = "Normal weight";
} else if (imc < 29.9) {
  classificacao = "Overweight";
} else if (imc < 34.9) {
  classificacao = "Obesity class 1";
} else if (imc < 39.9) {
  classificacao = "Obesity class 2";
} else {
  classificacao = "Obesity class 3";
}

  resultado.style.backgroundColor = "#00FF0080";
  resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, ${classificacao}`;
});
