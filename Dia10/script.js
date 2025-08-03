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
function mostrarmenu3(){
    const juego=document.querySelector(`.juego`);
    juego.style.display=`none`

    const menu =document.querySelector(`.menu`);
    menu.style.display=`flex`;
    menu.classList.add(`aparecer`)
}
let puntosjugador=0
let puntosdealer=0
document.getElementById("imagenjugador").innerHTML = "";
let id =null
const crear= document.getElementById("jugar");
crear.addEventListener ("click",crearmazo);
function crearmazo(){
    const xml=  new XMLHttpRequest();
    const url= `https://deckofcardsapi.com/api/deck/new/shuffle/`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);
                id= datos.deck_id
                
                
            }
            catch(err){
                console.log(err.message);
            }
            
        }
        
    }
    xml.send()
    
}    
const pedir= document.getElementById("pedir");
pedir.addEventListener ("click",pedircarta);
function pedircarta(){
                const xmlcarta=  new XMLHttpRequest();
                const urlcarta=`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
                xmlcarta.open("GET" ,urlcarta,true);
                xmlcarta.onreadystatechange=function(){ 
                if (xmlcarta.readyState === 4 && xmlcarta.status === 200){
                    const datoscarta=JSON.parse(xmlcarta.responseText);
                    const carta=datoscarta.cards[0];
                    const imagenjugador=document.getElementById("imagenjugador");
                    imagenjugador.innerHTML+=  `<img src="${carta.image}" style="width: 100px; height: 120px;" >`
                    valor=carta.value
                    puntos=0
                    if (["KING","QUEEN" ,"JACK"].includes(valor)){
                        puntos=10;
                    }
                    else if (valor==="ACE"){
                        puntos= 11;
                        if (puntosjugador + puntos > 21) {
                                puntos = 1;
                            }

                    }
                    else{
                        puntos=parseInt(valor)
                    }
                    puntosjugador+=puntos
                }
                }
                xmlcarta.send();

            }
            
        
    
    

