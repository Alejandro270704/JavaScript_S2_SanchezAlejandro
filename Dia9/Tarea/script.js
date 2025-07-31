let idpokemon = 0;
function buscarpersonaje (idnuevo){
    const personaje = idnuevo ||document.getElementById("buscanombre").value.toLowerCase() ;
    const xml=  new XMLHttpRequest();
    const url= `https://pokeapi.co/api/v2/pokemon/${personaje}/`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);
                const imagen1=document.getElementById("imagen");
                imagen1.innerHTML= ` <img src=${datos.sprites.front_default}>`
                const id = document.getElementById("numero");
                id.innerHTML=`${datos.id}`;
                const name =document.getElementById("nombrepokemon");
                name.innerHTML = `${datos.name}`
                idpokemon= datos.id
            }
            catch(err){
                console.log(err.message);
            }
            }
        }
        xml.send();
    }
    const enviar = document.getElementById("buscanombre");
    enviar.addEventListener("keydown", function (enter ){
        if (enter.key=== "Enter"){
            buscarpersonaje();
        }
    });
    const botonprev= document.getElementById("atras");
    botonprev.addEventListener ("click",  ()=>{
        if (idpokemon> 1){
            buscarpersonaje(idpokemon-1);
        }
    })
    const botonadelante= document.getElementById("adelante");
    botonadelante.addEventListener ("click",  ()=>{

            buscarpersonaje(idpokemon+1);
        }
    )
