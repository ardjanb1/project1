document.getElementById("konverto").addEventListener("click",function(){
    const vlera= parseFloat(document.getElementById("vlera").vlera);
    const ngaMonedha= document.getElementById("nga-monedha").vlera;
    const teMonedha= document.getElementById("te-monedha").vlera;

    const exchangeVlerat={
        USD: { EUR: 0.92, USD:1},
        EUR: { USD: 1.09, EUR:1},
    };

    const formula=vlera*exchangeVlerat[ngaMonedha][teMonedha];
    document.getElementById("rezultati").textContent=`${vlera} ${ngaMonedha}` =
    `${formula.toFixed(2)} ${teMonedha}`;

});