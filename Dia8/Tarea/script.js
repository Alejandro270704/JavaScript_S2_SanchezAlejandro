function buscarpersonaje (){
    const id=(prompt(" ingresa el id del personaje "));
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
                        console.log(
                `Personaje:
name: ${datos.name}
height: ${datos.height}
mass: ${datos.mass}
hair_color: ${datos.hair_color}
skin_color: ${datos.skin_color}
eye_color: ${datos.eye_color}
birth_year: ${datos.birth_year}
gender: ${datos.gender}
planeta:${planetadatos.name}`)
                        
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
buscarpersonaje()