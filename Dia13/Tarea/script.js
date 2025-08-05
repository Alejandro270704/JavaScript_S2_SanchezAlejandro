
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
                resultado.innerHTML=""
                if (datos.results && datos.results.length>0) {
                    datos.results.forEach(personaje => {
                        resultado.innerHTML+= `
                        <div class="col-md-4 mb-4">
                        <div class="card h-100 bg-dark text-white">
                        <img src="${personaje.image.url}" class="card-img-top">
                        <h1 class="card-title">${personaje.name}</h1>
                        Poderes:<br>
                        inteligencia: ${personaje.powerstats.intelligence}<br>
                        fuerza: ${personaje.powerstats.strength}<br>
                        velocidad: ${personaje.powerstats.speed}<br>
                        poder: ${personaje.powerstats.power}
                        </div>
                        </div>
                    
                    `;}
                    
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