class Personagem {
  constructor(imagem) {
    this.imagem = imagem
    this.frameAtual = 1
  }
  
  exibe() {
    image(this.imagem, 0, height-135, 110, 135, 
          220 * (this.frameAtual % 4),
          270 * Math.trunc(this.frameAtual / 4),
         220, 270);
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    if (this.frameAtual >= 16) {
      this.frameAtual = 0;
    }
  }
}