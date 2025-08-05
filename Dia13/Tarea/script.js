
function buscarpersonaje (){
    const name =document.getElementById("name").value ;
    const xml=  new XMLHttpRequest();
    const url= `https://superheroapi.com/api/910982315dbbfdfa523b0ff7c907c6c1/search/${name}`;
    xml.open("GET" ,url,true);
    xml.onreadystatechange=function(){ 
        if (xml.readyState === 4 && xml.status === 200){
            try {
                const datos=JSON.parse(xml.responseText);

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