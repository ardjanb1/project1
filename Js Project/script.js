const kat=document.getElementById('katrori');
let hue=0;
const update= () => { hue=(hue+1)%360;
         kat.style.backgroundColor = `hsl(${hue},100%,50%)`;
         requestAnimationFrame(update);
};
update();
