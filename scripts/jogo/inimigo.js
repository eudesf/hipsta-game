const largura = 52

class Inimigo extends Animacao {

    constructor(imagem) {
        super(imagem, width-largura, height-52, 4, 7, largura, 52, 104, 104)
    }

    exibe() {
        super.exibe();
        this.x -= 10;
        if (this.x <= -largura) {
            this.x = width-largura;
        }
    }
}