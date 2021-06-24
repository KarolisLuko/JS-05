"use script";

let keturkampis = {
    a:3,
    b:4,

    plotasPerimetras:function(){
        let plotas;
        let perimetras;

        plotas = this.a *this.b;
        perimetras =2 *this.a + 2 * this.b;


        return[plotas, perimetras]
    },
    istrizaine:function(){
        let ilgis;
        ilgis = Math.sqrt(this.a * this.a + this.b * this.b);
        return ilgis;



        return 0
    }
};


console.log(keturkampis.plotasPerimetras());
console.log(keturkampis.istrizaine());

document.getElementById("keturkampio-perimetras").innerText ="keturkampio perimetras" + keturkampio.plotasPerimetras()[1];
document.getElementById("keturkampio-plotas").innerText ="keturkampio plotas" + keturkampio.plotasPerimetras()[0];
document.getElementById("keturkampio-istrizaine").innerText ="keturkampio istrizaine" + keturkampio.istrizaine();