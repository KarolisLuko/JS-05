    
       "use strict";

       let masyvas = [];
       
       for (let i=0; i<100; i++) {
           let objektas = {
               id:i +1,
               vardas:"vardas"+(i+1)
       
           };
       
           masyvas[i]=objektas;/// i=> obijekta
       
           let div = document.createElement("div");
           div.innerHTML = objektas.id + " " + objektas.vardas;
           document.querySelector(".container").append(div);
       }
       
       console.log(masyvas);
