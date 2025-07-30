function buscarpersonaje (){
    const id =document.getElementById("cuadro").value ;
    const xml=  new XMLHttpRequest();
    const url= `https://swapi.py4e.com/api/people/${id}/`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);

                const urlplaneta=datos.homeworld;
                const xmlplaneta= new XMLHttpRequest();
                xmlplaneta.open("GET",urlplaneta,true);
                xmlplaneta.onreadystatechange=function(){
                    if (xmlplaneta.readyState === 4 && xmlplaneta.status === 200) {
                        const planetadatos = JSON.parse(xmlplaneta.responseText);
                        const resultado=document.getElementById("resultado");
                        resultado.innerHTML=(`
                        <h1>Personaje: </h1>
                        <p><strong> name: </strong> ${datos.name}</p>
                        <p><strong> height: </strong> ${datos.height}</p>
                        <p><strong> mass: </strong> ${datos.mass}</p>
                        <p><strong> hair_color: </strong> ${datos.hair_color}</p>
                        <p><strong> skin_color: </strong> ${datos.skin_color}</p>
                        <p><strong> eye_color: </strong> ${datos.eye_color}</p>
                        <p><strong> birth_year: </strong> ${datos.birth_year}</p>
                        <p><strong> gender: </strong> ${datos.gender}</p>
                        <p><strong> planeta: </strong> ${planetadatos.name}</p>
                        <p><strong> rotation_period: </strong> ${planetadatos.rotation_period}</p>
                        <p><strong> orbital_period: </strong> ${planetadatos.orbital_period}</p>
                        <p><strong> diameter: </strong> ${planetadatos.diameter}</p>
                        <p><strong> climate: </strong> ${planetadatos.climate}</p>
                        <p><strong> gravity: </strong> ${planetadatos.gravity}</p>
                        <p><strong> terrain: </strong> ${planetadatos.terrain}</p>
                        <p><strong> surface_water: </strong> ${planetadatos.surface_water}</p>
                        <p><strong> population: </strong> ${planetadatos.population}</p>
                        





                        `);
                        
                
                        
                }
            
                }
                xmlplaneta.send();
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