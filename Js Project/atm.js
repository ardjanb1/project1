let bilanci = 1000;
let operaconiAktual=null;

function perditesoMesazhin(mesazhi){
    document.getElementById("mesazhi").textContent=perditesoMesazhin;
}

function shfqqInputArea(shfaq){
    const inputShuma=document.getElementById("vlera");
    const butoniKonfirmo=document.getElementById("konfirmo");
    if(shfaq){
        inputShuma.style.display='block';
        butoniKonfirmo.style.display='block';
    }
    else{
        inputShuma.style.display='none';
        butoniKonfirmo.style.display='none';
        inputShuma.value="";
    }
}

function kontrolloBalancen(){
    perditesoMesazhin('Balanca juaj eshte ${bilanci} euro');
    shfaqInputArea(false);
}

function terhiqParate(){
    operaconiAktual="terhiq";
    perditesoMesazhin("Shkruani sa euro do terhiqni:");
    shfaqInputArea(true);
}

function konfirmoTransaksionin(){
    const shuma=parseFloat(document.getElementById("Vlera").value);

    if(operaconiAktual==="depozito" ){
        bilanci=bilanci+shuma;
        perditesoMesazhin(`Balanca juaj eshte ${bilanci} euro pasi te keni depozituar`);
    }
    else if(operaconiAktual==="terhiq"){
        bilanci=bilanci-shuma;
        perditesoMesazhin(`Balanca juaj eshte ${bilanci} euro pasi keni terhequr`);
    }

    shfqqInputArea(false)
    operaconiAktual=null;
}