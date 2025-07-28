function personaje(nombre,done){
    fetch("https://rickandmortyapi.com/api/character/?name=" + nombre)
    .then(response =>response.json())
    .then(data=> {done (data)})
    .catch(error=>{
        alert("no existe el perosnaje")
    })
    
}
function menu (){
    let nombre =prompt(`
        ============================================
        escriba el nombre del personaje a consultar
        ============================================ `).toLowerCase()
        personaje(nombre ,function (data){
            if ( data.results && data.results.length > 0){
                let mensaje ="";
                data.results.forEach(personaje => {
                    mensaje +=(`
                =========================================
                id : ${personaje.id}
                nombre: ${personaje.name}
                status: ${personaje.status}
                gender: ${personaje.gender}
                origin: ${personaje.origin.name}
                location: ${personaje.location.name}
                =========================================`)
                    
                }
            )
                
                
            alert(mensaje)       
            }
            else {
                alert("no hay personajes ")}
            menu ()
        }
        
    )
    
    
}
menu()
