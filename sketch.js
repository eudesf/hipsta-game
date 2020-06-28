let imagemCenario
let imagemPersonagem
let imagemInimigo
let cenario
let somDoJogo
let personagem
let inimigo

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
}

function keyPressed() {
  if (key === 'ArrowUp') {
    console.log("pula");
    personagem.pula();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(imagemPersonagem)
  inimigo = new Inimigo(imagemInimigo);
  somDoJogo.loop()
  frameRate(50);
}

function draw() {
  cenario.exibe()
  cenario.move()
  personagem.exibe()
  inimigo.exibe()
}
