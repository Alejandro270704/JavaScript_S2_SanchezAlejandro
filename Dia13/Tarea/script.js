
function buscarpersonaje() {
    const name = document.getElementById("name").value.toLowerCase();
    const xml = new XMLHttpRequest();
    const url = `//https://superheroapi.com/api/910982315dbbfdfa523b0ff7c907c6c1/search/${name}`;
    console.log(url)
    xml.open("GET", url, true);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            try {
                console.log("hola");
                const datos = JSON.parse(xml.responseText);
                const imagen1 = document.getElementById("imagen");
        
                resultado = `${datos.response}`
                console.log(resultado)


            }
            catch (err) {
                console.log(err.message);
            }
        }
        xml.send();
    }

}
const boton = document.getElementById("buscar");
boton.addEventListener("click", buscarpersonaje);