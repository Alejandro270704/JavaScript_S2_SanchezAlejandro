
function buscarpersonaje (){
    const name =document.getElementById("name").value.toLowerCase() ;
    const xml=  new XMLHttpRequest();
    const url= `https://superheroapi.com/api.php/910982315dbbfdfa523b0ff7c907c6c1/search/${name}`;
    console.log(url)
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);
                const resultado=document.getElementById("resultado");
                const imagen=document.getElementById("imagen")
                if (datos.results && datos.results.length>0) {
                    datos.results.forEach(personaje => {
                        resultado.innerHTML+= `
                        name: ${personaje.name}<br>
                        poderes: <br>
                        inteligencia: ${personaje.powerstats.intelligence}<br>
                        fuerza: ${personaje.powerstats.strength}<br>
                        velocidad: ${personaje.powerstats.speed}<br>
                        poder: ${personaje.powerstats.power}<br>
                        <img src="${personaje.image.url}" style="width: 130px; height: 170px; margin: 1vh;">
                `}
                    
                )};
                }
                            
                
                
                
                 catch(err){
                console.log(err.message);
            }
        }
    }
    xml.send();
}
const boton =document.getElementById("buscar");
boton.addEventListener("click",buscarpersonaje);