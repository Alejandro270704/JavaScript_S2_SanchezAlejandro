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

let puntosjugador=0;
let puntosdealer=0;
let id =null;
let Asjugador=0;
let Asdealer = 0;
let dealercarta = null;
const botonescrear= document.querySelectorAll(".jugar");
botonescrear.forEach(boton => {
    boton.addEventListener("click", crearmazo);
});
function crearmazo(){
    puntosjugador=0;
    puntosdealer=0;
    Asjugador=0;
    Asdealer=0;
    dealercartaoculta = null;
    document.getElementById("imagenjugador").innerHTML = "";
    document.getElementById(`imagendealer`).innerHTML ="";
    document.getElementById("puntosnumero").innerHTML = "0";
    document.querySelector(".mensaje").innerHTML = "";
    document.getElementById("puntosdealer").innerHTML = "0";
    pedir.disabled = false;
    plantar.disabled = false;
    const xml=  new XMLHttpRequest();
    const url= `https://deckofcardsapi.com/api/deck/new/shuffle/`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);
                id= datos.deck_id
                const xmlcartas = new XMLHttpRequest();
                const urlcartas = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=4`;
                xmlcartas.open("GET", urlcartas, true);
                xmlcartas.onreadystatechange = function () {
                    if (xmlcartas.readyState === 4 && xmlcartas.status === 200) {
                    const datoscartas = JSON.parse(xmlcartas.responseText);
                    const cartas = datoscartas.cards;
                    for (let i = 0; i < 2; i++) {
                        const carta = cartas[i];
                        document.getElementById("imagenjugador").innerHTML += `<img src="${carta.image}" style="width: 110px; height: 130px;">`;
                        let valor = carta.value;
                        let puntos = 0;
                        if (["KING", "QUEEN", "JACK"].includes(valor)) {
                            puntos = 10;
                        } else if (valor === "ACE") {
                            puntos = 11;
                            Asjugador+=1;
                        } else {
                            puntos = parseInt(valor);
                        }
                        puntosjugador += puntos;
                    }   

                    if (puntosjugador > 21 && Asjugador > 0) {
                        puntosjugador -= 10;
                        Asjugador-=1;
                    }
                    document.getElementById("puntosnumero").innerHTML = puntosjugador;
                    const cartaver = cartas[2];
                    document.getElementById("imagendealer").innerHTML += `<img src="${cartaver.image}" style="width: 110px; height: 130px;">`;

                    let valor = cartaver.value;
                    let puntos = 0;
                    if (["KING", "QUEEN", "JACK"].includes(valor)) {
                        puntos = 10;
                    } else if (valor === "ACE") {
                        puntos = 11;
                        Asdealer+=1;
                    } else {
                        puntos = parseInt(valor);
                    }
                    puntosdealer += puntos;
                    dealercartaoculta = cartas[3];
                    document.getElementById("imagendealer").innerHTML += `<img src="../img/adivina.svg" style="width: 110px; height: 130px;">`;

                    document.getElementById("puntosdealer").innerHTML = puntosdealer;
                    }
                     
                }
                xmlcartas.send();
            
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
                        Asjugador+=1;
                

                    }
                    else{
                        puntos=parseInt(valor)
                    }
                    puntosjugador+=puntos
                    if (puntosjugador>21 && Asjugador>0){
                        puntosjugador-=10;
                        Asjugador-=1;
                    }
                    verpuntos1=document.getElementById("puntosnumero");
                    verpuntos1.innerHTML=puntosjugador
                    if (puntosjugador > 21) {
                        mensaje=document.querySelector(".mensaje");
                        mensaje.innerHTML = "¡Lose!"
                        pedir.disabled = true;
                    }
                    if (puntosjugador === 21){
                        mensaje=document.querySelector(".mensaje");
                        mensaje.innerHTML = "¡Win!"
                        pedir.disabled = true;
                    }
                }
                }
                xmlcarta.send();

}
const plantar=document.getElementById("plantarse")
plantar.addEventListener("click",plantarse)
function plantarse (){
    pedir.disabled=true
    plantar.disabled = true;
    const carta = dealercartaoculta;
    const adivinadealer = document.getElementById("imagendealer");
    adivinadealer.removeChild(adivinadealer.lastChild)
    adivinadealer.innerHTML += `<img src="${carta.image}" style="width: 110px; height: 130px;">`;
    let valor = carta.value;
    let puntos = 0;
     if (["KING", "QUEEN", "JACK"].includes(valor)) {
        puntos = 10;
    } else if (valor === "ACE") {
        puntos = 11;
        Asdealer+=1;
    } else {
        puntos = parseInt(valor);
    }
    puntosdealer += puntos;
    if (puntosdealer > 21 && Asdealer > 0) {
        puntosdealer -= 10;
        Asdealer-=1;
    }
    document.getElementById("puntosdealer").innerHTML = puntosdealer;
    turnodealer();

}

function turnodealer(){
    const turno= setInterval(()=>{
        if (puntosdealer<17 ){
            const xmlcarta=  new XMLHttpRequest();
                const urlcarta=`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
                xmlcarta.open("GET" ,urlcarta,true);
                xmlcarta.onreadystatechange=function(){ 
                if (xmlcarta.readyState === 4 && xmlcarta.status === 200){
                    const datoscarta=JSON.parse(xmlcarta.responseText);
                    const carta=datoscarta.cards[0];
                    const imagendealer=document.getElementById("imagendealer");
                    imagendealer.innerHTML+=  `<img src="${carta.image}" style="width: 110px; height: 130px;" >`
                    let valor=carta.value
                    let puntos=0
                    if (["KING","QUEEN" ,"JACK"].includes(valor)){
                        puntos=10;
                    }
                    else if (valor==="ACE"){
                        puntos= 11;
                        Asdealer+=1
                

                    }
                    else{
                        puntos=parseInt(valor)
                    }
                    puntosdealer+=puntos
                    if (puntosdealer>21 && Asdealer>0){
                       puntosdealer -= 10;
                       Asdealer-=1
                    }
                    document.getElementById("puntosdealer").innerHTML = puntosdealer;
                     if (puntosdealer >= 17) {
                        clearInterval(turno);
                        resultado();
                        
                    }
                }
                xmlcarta.send();
                }
        }
        else {
            clearInterval(turno)
            resultado()
        }
    },1000
);
}

        
    


