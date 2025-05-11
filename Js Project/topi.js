const topi=document.getElementById('topi');
let x=0, y=0;
let dx=2, dy=2;
const update= () =>{
    x += dx;
    y  += dy; dx= -dy;
    if( x> window.innerWidth - 50 || x<0) dx=-dx;
    if( y> window.innerWidth - 50 || x<0) dy=-dy;
    topi.style.left= x + 'px';
    topi.style.top= y + 'px';
    requestAnimationFrame(update);

};
update();