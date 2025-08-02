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
    contenido.style.visibility = 'hidden';
    contenido.style.opacity = 0;
    contenido.style.backgroundImage = 'none';

    const instrucciones = document.querySelector('.instrucciones-1');
    instrucciones.style.display='block';
    instrucciones.classList.add('aparecer2');
}