function menu (){
    //simulador de menu
    let boleano=true ;
    let IngredientesL= [
        {
            nombre: "Pan",
            descripcion  :"Pan de hamburguesa clásico",
            precio: 2.5,
            stock: 500
        },
        {
            nombre: "Carne de res",
            descripcion : "Carne de res jugosa y sabrosa",
            precio: 8,
            stock: 300
        },
        {
            nombre: "Queso cheddar",
            descripcion : "Queso cheddar derretido",
            precio: 1.5,
            stock: 200
        }
    ];
    let categoriaL=[
        {
            nombre: "Clásica",
            descripcion : "Hamburguesas clásicas y sabrosas"
        },
        {
            nombre: "Vegetariana",
            descripcion : "Hamburguesas sin carne, perfectas para vegetarianos"
        },
        {
            nombre: "Gourmet",
            descripcion : "Hamburguesas gourmet con ingredientes premium"
        }
    ];
    let hamburguesaL=[ 
        {
        nombre: "Clásica",
        categoria: "Clásica",
        ingredientes: ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        precio: 10,
        chef: "ChefA"
    },
    {
        nombre: "Vegetariana",
        categoria: "Vegetariana",
        ingredientes: ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        precio: 8,
        chef: "ChefB"
    },
    {
        nombre: "Doble Carne",
        categoria: "Gourmet",
        ingredientes: ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        precio: 12,
        chef: "ChefC"
    }];
    let chefL=[ {
        nombre: "ChefA",
        especialidad: "Carnes"
    },
    {
        nombre: "ChefB",
        especialidad: "Cocina Vegetariana"
    },
    {
        nombre: "ChefC",
        especialidad: "Gourmet"
    }];
    while (boleano==true){
        let opcion =parseInt( prompt(
            `============================================
                    Menu de Hamburguesa            
            ============================================
            Seleccione una opción:
            1. Ingredientes
            2. Categorías
            3. Hamburguesas
            4. Chefs
            5. Salir
            ============================================
            Eliga una opción numerica:`
            ))
            if (opcion == 1) {
                ingredientesf(IngredientesL);
            }
            else if (opcion == 2) { 
                categorias(categoriaL);
            }
            else if (opcion == 3) {
                hamburguesa(hamburguesaL);
            }   
            else if (opcion == 4) {
                chef(chefL);
            }
            else if (opcion == 5) {
                boleano=false;
                alert("ha salido del programa ");
            } else {
                alert("opcion no valida");
            }
        }
    }

    
function ingredientesf(IngredientesL){
    let opc= parseInt(prompt(`
    ============================================
                 ingredientes             
    ============================================
    1.añadir ingredientes 
    2.modificar ingredientes
    3.eliminar ingredientes
    4.listar ingredientes 

    ============================================
            Eliga una opción numerica:
    `))
    if (opc===1){
        let nombre=prompt("ingrese el nombre");
        let descripcion=prompt("ingrese la descripcion");
        let precio=prompt(" ingrese el precio")
        let stock=parseInt(prompt("ingrese el stock"));

        let nuevo_in = {
            nombre: nombre,
            descripcion: descripcion,
            precio:precio,
            stock:stock,    
    }
    IngredientesL.push(nuevo_in)
    alert("se añadio el ingrediente")
    }
    if (opc===2){
            let lista = "seleccione el numero del ingrdiente a editar"
            for (let i = 0; i < IngredientesL.length; i += 1){
                lista +=` 
                ${i+1}.${IngredientesL[i].nombre} -${IngredientesL[i].descripcion}-${IngredientesL[i].precio}-${IngredientesL[i].stock}`
            }
            let eleccion =parseInt(prompt(lista))-1;
            if (eleccion >= 0 && eleccion < IngredientesL.length){
                let eleccion2= parseInt(prompt(`
                    ============================================
                    campos a editar 
                    ============================================
                    1.nombre
                    2.descripcion
                    3.precio
                    4.stock 
                    ============================================
                    seleccione la opcion que quiere editar`));
                    let campo= ""
                    if (eleccion2===1){
                        campo= "nombre";
                        let nuevoN= prompt("ingrese el nuevo nombre:");
                        IngredientesL[eleccion][campo]=nuevoN;
                    }
                    if (eleccion2===2){
                        campo= "descripcion";
                        let nuevoD= prompt("ingrese el nueva descripcion:");
                        IngredientesL[eleccion][campo]=nuevoD;
                    }
                    if (eleccion2===3){
                        campo= "precio";
                        let nuevoP= prompt("ingrese el nuevo precio:");
                        IngredientesL[eleccion][campo]=nuevoP;
                    }
                    if (eleccion2===4){
                        campo= "stock";
                        let nuevoS= prompt("ingrese el nuevo stock:");
                        IngredientesL[eleccion][campo]=nuevoS;
                    }

            }
                

            
        }
    if (opc===3){
        let mensaje = "seleccione el numero del ingrdiente a eliminar"
            for (let i = 0; i < IngredientesL.length; i += 1){
                
                mensaje +=` 
                ${i+1}.${IngredientesL[i].nombre} -${IngredientesL[i].descripcion}-${IngredientesL[i].precio}-${IngredientesL[i].stock}`
            }
            let eleccion =parseInt(prompt(mensaje))-1;
            if (eleccion >=0 && eleccion< IngredientesL.length ){
                let confirmar=prompt ("estas seguro s/n").toLowerCase()
                if (confirmar =="s"){
                    IngredientesL.splice(eleccion,1)
                }
                else {
                    alert("eliminacion cancelada")
                }
            }
    }
    if (opc===4){
        let mensaje2 ="lista de ingredientes"
        for (let i = 0; i < IngredientesL.length; i += 1){
                
                mensaje2 +=` 
                ${i+1}.${IngredientesL[i].nombre} -${IngredientesL[i].descripcion}-${IngredientesL[i].precio}-${IngredientesL[i].stock}`
            }
        alert(mensaje2)
    }
        
        

    }
    
function categorias (categoriaL){
    let opc= parseInt(prompt(`
    ============================================
                 categoria             
    ============================================
    1.añadir categoria  
    2.modificar categoria 
    3.eliminar categoria 
    4.listar categoria  

    ============================================
            Eliga una opción numerica:
    `))
    if (opc===1){
        let nombre=prompt("ingrese el nombre");
        let descripcion=prompt("ingrese la descripcion");

        let nuevo_ca = {
            nombre: nombre,
            descripcion: descripcion,
    }
    categoriaL.push(nuevo_ca)
    alert("se añadio la categoria")
    }
    
    if (opc===2){
            let lista = "seleccione el numero del categoria a editar"
            for (let i = 0; i < categoriaL.length; i += 1){
                lista +=` 
                ${i+1}.${categoriaL[i].nombre} -${categoriaL[i].descripcion}`
            }
            let eleccion =parseInt(prompt(lista))-1;
            if (eleccion >= 0 && eleccion < categoriaL.length){
                let eleccion2= parseInt(prompt(`
                    ============================================
                    campos a editar 
                    ============================================
                    1.nombre
                    2.descripcion
                    ============================================
                    seleccione la opcion que quiere editar`));
                    let campo= ""
                    if (eleccion2===1){
                        campo= "nombre";
                        let nuevoN= prompt("ingrese el nuevo nombre:");
                        categoriaL[eleccion][campo]=nuevoN;
                    }
                    if (eleccion2===2){
                        campo= "descripcion";
                        let nuevoD= prompt("ingrese el nueva descripcion:");
                        categoriaL[eleccion][campo]=nuevoD;
                    }


            }
                

            
        }
    if (opc===3){
        let mensaje = "seleccione el numero de la categoria a eliminar"
            for (let i = 0; i < categoriaL.length; i += 1){
                
                mensaje +=` 
                ${i+1}.${categoriaL[i].nombre} -${categoriaL[i].descripcion}`
            }
            let eleccion =parseInt(prompt(mensaje))-1;
            if (eleccion >=0 && eleccion< categoriaL.length ){
                let confirmar=prompt ("estas seguro s/n").toLowerCase()
                if (confirmar =="s"){
                    categoriaL.splice(eleccion,1)
                }
                else {
                    alert("eliminacion cancelada")
                }
            }
    }
    if (opc===4){
        let mensaje2 ="lista de categorias"
        for (let i = 0; i < categoriaL.length; i += 1){
                
                mensaje2 +=` 
                ${i+1}.${categoriaL[i].nombre} -${categoriaL[i].descripcion}`
            }
        alert(mensaje2)
    }
    return (categoriaL)
    

}

function hamburguesa(hamburguesaL) {
    let opc = parseInt(prompt(`
    ============================================
                 HAMBURGUESA             
    ============================================
    1. Añadir hamburguesa  
    2. Modificar hamburguesa 
    3. Eliminar hamburguesa 
    4. Listar hamburguesas  
    ============================================
    Elija una opción numérica:
    `));

    if (opc === 1) {
        let nombre = prompt("Ingrese el nombre:");
        let categoria = prompt("Ingrese la categoría:");
        let ingredientes = prompt("Ingrese los ingredientes separados por coma :").split(",");
        let precio = prompt("Ingrese el precio:");
        let chef = prompt("Ingrese el chef:");

        let nuevo_ha = {
            nombre: nombre,
            categoria: categoria,
            ingredientes: ingredientes,
            precio: precio,
            chef: chef
        };
        hamburguesaL.push(nuevo_ha);
        alert("Se añadió la hamburguesa");
    }

    if (opc === 2) {
        let lista = "Seleccione el número de la hamburguesa a editar:";
        for (let i = 0; i < hamburguesaL.length; i++) {
            lista += `
            ${i + 1}. ${hamburguesaL[i].nombre} - ${hamburguesaL[i].categoria} - ${hamburguesaL[i].ingredientes} - ${hamburguesaL[i].precio} - ${hamburguesaL[i].chef}`;
        }
        let eleccion = parseInt(prompt(lista)) - 1;
        if (eleccion >= 0 && eleccion < hamburguesaL.length) {
            let campo = parseInt(prompt(`
                ============================================
                Campos a editar 
                ============================================
                1. Nombre
                2. Categoría
                3. Ingredientes
                4. Precio
                5. Chef
                ============================================
                Elija el campo a editar:
            `));

            if (campo === 1) {
                let nuevoN = prompt("Ingrese el nuevo nombre:");
                hamburguesaL[eleccion].nombre = nuevoN;
            } else if (campo === 2) {
                let nuevaC = prompt("Ingrese la nueva categoría:");
                hamburguesaL[eleccion].categoria = nuevaC;
            } else if (campo === 3) {
                let nuevoI = prompt("Ingrese los nuevos ingredientes separados por coma:").split(",");
                hamburguesaL[eleccion].ingredientes = nuevoI;
            } else if (campo === 4) {
                let nuevoP = prompt("Ingrese el nuevo precio:");
                hamburguesaL[eleccion].precio = nuevoP;
            } else if (campo === 5) {
                let nuevoChef = prompt("Ingrese el nuevo chef:");
                hamburguesaL[eleccion].chef = nuevoChef;
            } else {
                alert("Opción inválida");
            }
        }
    }

    if (opc === 3) {
        let mensaje = "Seleccione el número de la hamburguesa a eliminar:";
        for (let i = 0; i < hamburguesaL.length; i++) {
            mensaje += `
            ${i + 1}. ${hamburguesaL[i].nombre} - ${hamburguesaL[i].categoria} - ${hamburguesaL[i].ingredientes} - ${hamburguesaL[i].precio} - ${hamburguesaL[i].chef}`;
        }
        let eleccion = parseInt(prompt(mensaje)) - 1;
        if (eleccion >= 0 && eleccion < hamburguesaL.length) {
            let confirmar = prompt("¿Está seguro? (s/n)").toLowerCase();
            if (confirmar === "s") {
                hamburguesaL.splice(eleccion, 1);
                alert("Hamburguesa eliminada.");
            } 
            else {
                alert("Eliminación cancelada.");
            }
        }
    }

    if (opc === 4) {
        let mensaje2 = "Lista de hamburguesas:";
        for (let i = 0; i < hamburguesaL.length; i++) {
            mensaje2 += `
            ${i + 1}. ${hamburguesaL[i].nombre} - ${hamburguesaL[i].categoria} - ${hamburguesaL[i].ingredientes} - ${hamburguesaL[i].precio} - ${hamburguesaL[i].chef}\n`;
        }
        alert(mensaje2);
    }

    return hamburguesaL;
}
function chef (chefL){
    let opc= parseInt(prompt(`
    ============================================
                 chef             
    ============================================
    1.añadir chef  
    2.modificar chef 
    3.eliminar chef 
    4.listar chef  

    ============================================
            Eliga una opción numerica:
    `))
    if (opc===1){
        let nombre=prompt("ingrese el nombre");
        let especialidad=prompt("ingrese la especialidad");

        let nuevo_che = {
            nombre: nombre,
            especialidad: especialidad,
    }
    chefL.push(nuevo_che)
    alert("se añadio el chef")

    
}
    if (opc===2){
        let lista = "seleccione el numero del chef a editar"
        for (let i = 0; i < chefL.length; i += 1){
            lista +=` 
            ${i+1}.${chefL[i].nombre} -${chefL[i].especialidad}`
        }
        let eleccion =parseInt(prompt(lista))-1;
        if (eleccion >= 0 && eleccion < chefL.length){
            let eleccion2= parseInt(prompt(`
                ============================================
                campos a editar 
                ============================================
                1.nombre
                2.especialidad 
                ============================================
                seleccione la opcion que quiere editar`));
            let campo= ""
            if (eleccion2===1){
                campo= "nombre";
                let nuevoN= prompt("ingrese el nuevo nombre:");
                chefL[eleccion][campo]=nuevoN;
            }
            if (eleccion2===2){
                campo= "especialidad";
                let nuevoS= prompt("ingrese la nueva especialidad:");
                chefL[eleccion][campo]=nuevoS;
            }
        }
    }
    if (opc===3){
        let mensaje = "seleccione el numero del chef a eliminar"
        for (let i = 0; i < chefL.length; i += 1){
            
            mensaje +=` 
            ${i+1}.${chefL[i].nombre} -${chefL[i].especialidad}`
        }
        let eleccion =parseInt(prompt(mensaje))-1;
        if (eleccion >=0 && eleccion< chefL.length ){
            let confirmar=prompt ("estas seguro s/n").toLowerCase()
            if (confirmar =="s"){
                chefL.splice(eleccion,1)
            }
            else {
                alert("eliminacion cancelada")
            }
        }
    }
    if (opc===4){
        let mensaje2 ="lista de chefs"
        for (let i = 0; i < chefL.length; i += 1){
            
            mensaje2 +=` 
            ${i+1}.${chefL[i].nombre} -${chefL[i].especialidad}`
        }
        alert(mensaje2);
}return (chefL)
}