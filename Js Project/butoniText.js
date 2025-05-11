const butoni= document.getElementById('ButoniTEXT');
const teksti = document.getElementById('teksti');
const disatekste = ["Adi", "Visi"];
let index=0;

butoni.addEventListener('click', () =>{
    index=(index+1)% TextDecoderStream.length;
    teksti.textContent=disatekste[index];
    
});