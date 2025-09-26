function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,

    fala: (assunto) => {
      return `${nome} ${sobrenome} esta falando sobre ${assunto}.`;
    },
  };
}

const p1 = criaPessoa("kauã", "felix");
console.log(p1.fala("javaScript"));
