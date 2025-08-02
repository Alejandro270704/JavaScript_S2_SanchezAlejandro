
function desaparecer() {
    document.querySelector('.titulo').classList.add('desaparecerelemento');
    document.querySelector('.texto1').classList.add('desaparecerelemento');
    document.querySelector('.entrar').classList.add('desaparecerelemento');
    
    setTimeout(()=>{
        const menu =document.querySelector(`.menu`);
        menu.style.display=`flex`;
        menu.classList.add(`aparecer`)
    },600)
    

  }
