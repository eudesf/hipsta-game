class Pulo {
    constructor(altura, tempo) {
        this.altura = altura;
        this.tempo = tempo;
        this.maxSeno = 2*Math.PI - (Math.PI / 2);

        this.intervaloSeno = this.maxSeno * (40 / this.tempo);
        this.senoAtual = this.intervaloSeno;
    }

    alturaPulo() {
        let res;
        if (this.senoAtual >= this.maxSeno) { 
            res = 0;
        } else {
            res = this.altura * Math.sin(this.senoAtual);
            this.senoAtual += this.intervaloSeno;
        }
        return res;
    }

}