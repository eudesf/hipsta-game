class Animacao {

    constructor(imagem, x, y, colunas, linhas, largura, altura, larguraSprite, alturaSprite) {
        this.imagem = imagem
        this.x = x
        this.y = y
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite
        this.colunas = colunas;
        this.linhas = linhas;
        this.largura = largura;
        this.altura = altura;
        this.frameAtual = 0
    }

    exibe() {
        image(
            this.imagem, 
            this.x, 
            this.y,
            this.largura, 
            this.altura, 
            this.larguraSprite * (this.frameAtual % this.colunas),
            this.alturaSprite * Math.trunc(this.frameAtual / this.colunas),
            this.larguraSprite, 
            this.alturaSprite
        );
        //console.log(this.frameAtual + " - [" + (this.larguraSprite * (this.frameAtual % this.colunas)) + "," + (this.alturaSprite * Math.trunc(this.frameAtual / this.colunas)) + "]");
        this.anima();
    }

    anima() {
        this.frameAtual++;
        if (this.frameAtual >= this.colunas * this.linhas) {
            this.frameAtual = 0;
        }
    }
}