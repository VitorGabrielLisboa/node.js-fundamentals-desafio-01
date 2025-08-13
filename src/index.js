const characters = require("./characters.js");
const prompt = require("prompt-sync")({ sigint: true });

const rollDice = () => Math.floor(Math.random() * 6) + 1;
const getBlock = () =>
  ["Reta", "Curva", "Confronto"][Math.floor(Math.random() * 3)];

//logs
const logRoll = (name, type, dice, attr) => {
  console.log(`${name} 🎲 rolou: ${type}: ${dice} + ${attr} = ${dice + attr}`);
};

const logWinner = (p1, p2, total1, total2) => {
  if (total1 === total2) return console.log("✨ Empate");
  const winner = total1 > total2 ? p1 : p2;
  console.log(`✨ ${winner.name} marcou um ponto`);
  winner.score++;
};

const probability = (n) => {
  return !!n && Math.random() <= n;
};

const logFinalResult = (p1, p2) => {
  console.log("\n🏆 Resultado:");
  console.log(`${p1.name}: ${p1.score} ponto${p1.score !== 1 ? "s" : ""}`);
  console.log(`${p2.name}: ${p2.score} ponto${p2.score !== 1 ? "s" : ""}`);
  console.log(
    p1.score > p2.score
      ? `${p1.name} venceu!`
      : p2.score > p1.score
      ? `${p2.name} venceu!`
      : "Empate!"
  );
};

//player da corrida
async function playRace(p1, p2, rounds = 5) {
  console.log(`\n🏁 Corrida entre ${p1.name} e ${p2.name}!\n`);
  for (let i = 1; i <= rounds; i++) {
    const block = getBlock();
    const [dice1, dice2] = [rollDice(), rollDice()];
    console.log(`\nRodada ${i} | Bloco: ${block}`);

    if (block === "Confronto") {
      const [power1, power2] = [dice1 + p1.power, dice2 + p2.power];
      const [attackType, nitro] = [probability(0.4), probability(0.3)];
      logRoll(p1.name, "poder", dice1, p1.power);
      logRoll(p2.name, "poder", dice2, p2.power);

      if (power1 > power2 && p2.score > 0) {
        if (attackType) {
          console.log(`🥊 ${p1.name} venceu! ${p2.name} perde 2 pontos 💣`);
          nitro &&
            (console.log(`💨 ${p1.name} ganhou um nitro (+1 ponto)`),
            p1.score++);
          p2.score = Math.max(0, p2.score - 2);
        } else {
          console.log(`🥊 ${p1.name} venceu! ${p2.name} perde 1 ponto 🐢`);
          nitro &&
            (console.log(`💨 ${p1.name} ganhou um nitro (+1 ponto)`),
            p1.score++);

          p2.score--;
        }
      } else if (power1 < power2 && p1.score > 0) {
        if (attackType) {
          console.log(`🥊 ${p2.name} venceu! ${p1.name} perde 2 pontos 💣`);
          nitro &&
            (console.log(`💨 ${p2.name} ganhou um nitro (+1 ponto)`),
            p2.score++);

          p1.score = Math.max(0, p1.score - 2);
        } else {
          console.log(`🥊 ${p2.name} venceu! ${p1.name} perde 1 ponto 🐢`);
          nitro &&
            (console.log(`💨 ${p2.name} ganhou um nitro (+1 ponto)`),
            p2.score++);

          p1.score--;
        }
      } else {
        console.log("🥊 Empate (sem perda de pontos)");
      }
    } else {
      const attr = block === "Reta" ? "speed" : "mobility";
      const [totalTest1, totalTest2] = [dice1 + p1[attr], dice2 + p2[attr]];
      logRoll(p1.name, attr, dice1, p1[attr]);
      logRoll(p2.name, attr, dice2, p2[attr]);
      logWinner(p1, p2, totalTest1, totalTest2);
    }
  }
  logFinalResult(p1, p2);
}
const showChars = () => {
  console.clear();
  console.log("Personagens Disponiveis: ");
  for (let i = 0; i < characters.length; i += 2) {
    const linha = `${i + 1}-${characters[i].name.padEnd(15)} ${i + 2}-${
      characters[i + 1]?.name || "\n"
    }`;
    console.log(linha);
  }
};

const validateSelection = (string) => {
  const num = parseInt(string);
  return !isNaN(num) && num >= 1 && num <= characters.length;
};
(async () => {
  let selecionarPlayer1, selecionarPlayer2;
  showChars();

  do {
    selecionarPlayer1 = prompt("Player 1: Digite o número do personagem: ");
    if (!validateSelection(selecionarPlayer1)) {
      console.log(
        `❌ Inválido! Digite um número entre 1 e ${characters.length}`
      );
    }
  } while (!validateSelection(selecionarPlayer1));
  console.log("");
  showChars();

  do {
    selecionarPlayer2 = prompt("Player 2: Digite o número do personagem: ");
    if (!validateSelection(selecionarPlayer2)) {
      console.log(
        `❌ Inválido! Digite um número entre 1 e ${characters.length}`
      );
    } else if (selecionarPlayer1 === selecionarPlayer2) {
      console.log(`❌ Esse personagem já foi escolhido pelo Player 1`);
    }
  } while (!validateSelection(selecionarPlayer2));

  const player1 = characters[selecionarPlayer1 - 1];
  const player2 = characters[selecionarPlayer2 - 1];
  playRace(player1, player2);
})();
