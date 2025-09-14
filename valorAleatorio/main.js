function random(min, max){
const r = Math.random() * (max - min) + min;
return r;

}

let randomNumber = random(0, 1);
console.log(randomNumber.toFixed(10));