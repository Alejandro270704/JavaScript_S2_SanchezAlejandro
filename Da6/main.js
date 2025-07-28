function caracteres(done){
    const results =fetch("https://rickandmortyapi.com/api/character/?name="+`${nombre}`);
    results
    .then(response =>response.json())
    .then(data=> {done (data)});

}
caracteres(data=>{
    console.log (data)
});
function menu (data){
    let nombre =promt(`============================================
        escriba el nombre del personaje a consultar `).tolowercase()
        const results =fetch("https://rickandmortyapi.com/api/character/?name="+nombre);

}
