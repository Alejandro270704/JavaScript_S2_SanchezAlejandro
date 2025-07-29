function buscarpersonaje (){
    const id=(prompt(" ingresa el id del personaje "));
    const xml=  new XMLHttpRequest();
    const url= `https://swapi.py4e.com/api/people/?:id=${id}`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);
                console.log(" personaje:\nname:"+datos["results"][id]["name"]+"\nheight:"+datos["results"][id]["height"]+"\nmass:"+datos["results"][id]["mass"]);
                
            }
            
            catch(err){
                console.log(err.message);
            }
        }
         
    }
    xml.send();
}
buscarpersonaje()