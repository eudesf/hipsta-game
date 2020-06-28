class Personagem extends Animacao {

  constructor(imagem) {
    super(imagem, 0, height - 135, 4, 4, 110, 135, 220, 270)
    this.baseY = height - 135;

    this.gravidade = 20
    this.forcaPulo = 0;
    this.pulo = null;
  }

  exibe() {
    super.exibe();
    if (this.pulo) {
      const alturaPulo = this.pulo.alturaPulo();
      if (alturaPulo === 0) {
        this.pulo = null;
        this.aplicaGravidade();
      } else {
        this.y = this.y - alturaPulo;
      }
    } else {
      this.aplicaGravidade();
    }
  }

  aplicaGravidade() {
    if (this.y < this.baseY) {
      this.y += this.gravidade;
    }
    if (this.y > this.baseY) {
      this.y = this.baseY;
    }
  }
  
  pula() {
    this.pulo = new Pulo(25, 1200);
  }

}
