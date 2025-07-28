function personaje(nombre,done){
    fetch("https://rickandmortyapi.com/api/character/?name=" + nombre)
    .then(response =>response.json())
    .then(data=> {done (data)});
    
}
function menu (){
    let nombre =prompt(`
        ============================================
        escriba el nombre del personaje a consultar
        ============================================ `).toLowerCase()
        personaje(nombre ,function (data){
            if (data.results,data.length > 0){
                alert(`
                    ============================================
                    `)
            }
        }
    )
    
}
