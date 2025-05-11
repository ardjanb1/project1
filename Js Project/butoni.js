const buton=document.getElementById('BUtoniNgjyra');
buton.addEventListener('click', () => {
    const ngjyrND=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor=ngjyrND;
});
