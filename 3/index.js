"use script";

document.getElementById("patvirtinti").addEventListener("click", function() {
    let a,b;
    a = parseFloat(document.getElementById("a-krastine").value);
    b = parseFloat(document.getElementById("b-krastine").value);

    let kvadratas = {
        a: 1000,
        b: 2000,
    

        paleidimas: function() {
            this.a = a;
            this.b = b;
        },

        plotasPerimetras: function() {
    
            let plotas;
            let perimetras;
    
            plotas = this.a * this.b;
            perimetras= 2 * this.a + 2 * this.b;
            
            return [plotas, perimetras] 
        },
    
        istrizaine: function() {
            let ilgis;
            ilgis = Math.sqrt(this.a * this.a + this.b * this.b );
            return ilgis;
        },
    
        nubrezk: function() {
            let elementas = document.querySelector(".keturkampis");
            elementas.style.width = this.a + "px";
            elementas.style.height = this.b + "px";
        },
    
        isvesk: function() {
            document.getElementById("kvadrato-perimetras").innerText = "Kvadrato perimetras " +  kvadratas.plotasPerimetras()[1];
            document.getElementById("kvadrato-plotas").innerText ="Kvadrato plotas " + kvadratas.plotasPerimetras()[0];
            document.getElementById("kvadrato-istrizaine").innerText = "Kvadrato istrizaine " + kvadratas.istrizaine();
        }
    
    };
    
    kvadratas.paleidimas();
    kvadratas.isvesk();
    kvadratas.nubrezk();

});