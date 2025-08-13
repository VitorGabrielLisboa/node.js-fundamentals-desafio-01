<div align="center">
  <img src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r0rx7o4jm6jy2uvzt7xk" alt="Banner da DIO" title="Banner da DIO" width="200">
</div>

<div align="center">

![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=javascript&logoColor=%23ffffff&labelColor=%23222222&color=%23F7DF1E) ![Static Badge](https://img.shields.io/badge/Node.js-green?style=flat&logo=node.js&logoColor=%23ffffff&labelColor=%23222222&color=%23339933) ![Static Badge](https://img.shields.io/badge/Prompt--Sync-orange?style=flat&logo=npm&logoColor=%23ffffff&labelColor=%23222222&color=%23FF7F11)

</div>

# 🏁 Simulador de Corridas com Node.js

> Este projeto foi desenvolvido para simular uma corrida entre dois jogadores em um terminal. Ademais, o projeto foi feito para ser entregue na plataforma **[DIO](https://web.dio.me/track/96301410-2dd7-4bb7-b992-85cb0bf5f1a2)**.

---

## ⚒️ Tecnologias Utilizadas

- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem principal para a lógica do jogo.
- **[Node.js](https://nodejs.org/)**: Ambiente de execução para rodar o JavaScript no terminal.
- **[Prompt-sync](https://www.npmjs.com/package/prompt-sync)**: Biblioteca para entrada de dados no terminal.

---

## 📌 Funcionalidades

- **Seleção de Personagem**:
  - Lista de personagens disponíveis com atributos únicos.
  - Validação para impedir seleção inválida ou repetida.
- **Sistema de Rodadas**:
  - Cada rodada sorteia um **bloco**: `Reta`, `Curva` ou `Confronto`.
  - Nos blocos de Reta e Curva, vence quem tiver maior soma de **dado + atributo** (velocidade ou mobilidade).
  - No Confronto, ocorre combate com possibilidade de ataques, perda de pontos e bônus de nitro.
- **Probabilidades Aleatórias**:
  - Ataques e bônus de nitro têm chance de ocorrer, deixando a corrida imprevisível.
- **Placar Final**:
  - Mostra o resultado final e declara o campeão (ou empate).

---

## ▶️ Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/VitorGabrielLisboa/node.js-fundamentals-desafio-01.git
   cd node.js-fundamentals-desafio-01
   ```
2. **Instale as dependências**:
   ```bash
   npm install prompt-sync
   ```
3. **Execute o jogo:**:
   ```bash
   npm run start
   ```

---

## Estrutura do projeto

```bash
📦 corrida-js
 ┣ 📜 index.js        # Código principal do jogo
 ┣ 📜 characters.js   # Lista de personagens e atributos
 ┗ 📜 README.md       # Documentação do projeto
```

---

<div align="center" style="font-size: 0.8em;">
  Não é perfeito, mas está close enough ✨
</div>
