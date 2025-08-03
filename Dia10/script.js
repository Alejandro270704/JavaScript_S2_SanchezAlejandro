function desaparecer() {
    const musica= document.getElementById(`musicafondo`);
    musica.play();
    document.querySelector('.titulo').classList.add('desaparecerelemento');
    document.querySelector('.texto1').classList.add('desaparecerelemento');
    document.querySelector('.entrar').classList.add('desaparecerelemento');
    
    setTimeout(()=>{
        const menu =document.querySelector(`.menu`);
        menu.style.display=`flex`;
        menu.classList.add(`aparecer`)
    },600)

  }
function mostrarreglas() {
    document.querySelector('.menu').style.display='none';
    
    const contenido = document.querySelector('.contenido');
    contenido.style.display = 'none';
    contenido.style.opacity = 0;
    contenido.style.backgroundImage = 'none';

    const instrucciones = document.querySelector('.instrucciones-1');
    instrucciones.style.display='block';
    instrucciones.classList.add('aparecer2');
}
function mostrarmenu(){
    const instrucciones = document.querySelector('.instrucciones-1');
    instrucciones.style.display = 'none';
    const menu =document.querySelector(`.menu`);
    menu.style.display=`flex`;
    menu.classList.add(`aparecer`)
}
function mostrarcreditos(){
    document.querySelector('.menu').style.display='none';

    const contenido = document.querySelector('.contenido');
    contenido.style.display = 'none';
    contenido.style.opacity = 0;
    contenido.style.backgroundImage = 'none';

    const creditos=document.querySelector (`.creditos`)
    creditos.style.display=`block`
    creditos.classList.add(`aparecer2`)

}
function mostrarmenu2(){
    const creditos = document.querySelector('.creditos');
    creditos.style.display = 'none';
    const menu =document.querySelector(`.menu`);
    menu.style.display=`flex`;
    menu.classList.add(`aparecer`)
}
function mostrargame(){
    document.querySelector('.menu').style.display='none';
    
    const contenido = document.querySelector('.contenido');
    contenido.style.display = 'none';
    contenido.style.opacity = 0;
    contenido.style.backgroundImage = 'none';

    const juego= document.querySelector(`.juego`);
    juego.style.display=`block`;
    juego.style.display.add(`aparecer2`);

}