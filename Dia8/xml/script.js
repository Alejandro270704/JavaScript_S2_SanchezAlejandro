//consumo de api 
//mediante XMLHttprequest
function buscarpersonaje(){
    const nombre=prompt(" ingresa el nombre de el personaje ");
    const xml=  new XMLHttpRequest();
    const url= `https://rickandmortyapi.com/api/character?name= ${nombre}`;
    xml.open("GET ",url,true)
    xml.onreadystatechange= function(){
        if (xml.readyState===4 && xml.status===200){
            try {
                const daticos=JSON.parse(xml.responseText);
                alert ("the character is : name "+daticos["results"][0]+"status:"+["results"][0]["name"]);
            }
            catch(err){
                    console.log(err.message);
            }
        }
        xml.send();

    }
}