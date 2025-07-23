function menu (){
    //simulador de menu
    let boleano =true ;
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
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }];
    let chefL=[ {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }];
    while (boleano=true){
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
                boleano = false;
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
            for (const property in IngredientesL) {
                console.log(`${property}: ${IngredientesL[property]}`);

        }
        
        

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

    return (categoriaL)

}
}
function hamburguesa(hamburguesaL){
    let opc= parseInt(prompt(`
    ============================================
                 hamurguesa             
    ============================================
    1.añadir hamurguesa  
    2.modificar hamurguesa 
    3.eliminar hamurguesa 
    4.listar hamurguesa  

    ============================================
            Eliga una opción numerica:
    `))
    if (opc===1){
        let nombre=prompt("ingrese el nombre");
        let categoria=prompt("ingrese la categoria");
        let ingredientes=prompt("ingrese los ingredientes");
        let precio=prompt("ingrese el precio");
        let chef=prompt("ingrese el chef");




        let nuevo_ha = {
            nombre: nombre,
            categoria: categoria,
            ingredientes: ingredientes,
            precio:precio,
            chef: chef,
            
    }
    hamburguesaL.push(nuevo_ha)
    alert("se añadio la hamburguesa")

    return (categoriaL)
}}
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

    return (chefL)
}
}