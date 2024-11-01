const nomeDoHeroi = "Mario";
let nivelDoHeroi = 10002;
let nivel;

// Verifica em qual nível o herói está
if (nivelDoHeroi < 1000) {
  nivel = "Ferro";
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
  nivel = "Bronze";
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
  nivel = "Prata";
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
  nivel = "Ouro";
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
  nivel = "Platina";
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
  nivel = "Ascendente";
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
  nivel = "Imortal";
} else if (nivelDoHeroi >= 10001) {
  nivel = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivel);
