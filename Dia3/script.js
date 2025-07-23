function menu (){
    //simulador de menu
    let boleano =true    
    let Ingredientes= [
        {
            "nombre": "Pan",
            "descripcion": "Pan de hamburguesa clásico",
            "precio": 2.5,
            "stock": 500
        },
        {
            "nombre": "Carne de res",
            "descripcion": "Carne de res jugosa y sabrosa",
            "precio": 8,
            "stock": 300
        },
        {
            "nombre": "Queso cheddar",
            "descripcion": "Queso cheddar derretido",
            "precio": 1.5,
            "stock": 200
        }
    ]
    let categoria=[
        {
            "nombre": "Clásica",
            "descripcion": "Hamburguesas clásicas y sabrosas"
        },
        {
            "nombre": "Vegetariana",
            "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
        },
        {
            "nombre": "Gourmet",
            "descripcion": "Hamburguesas gourmet con ingredientes premium"
        }
    ]
    let hamburguesa=[ 
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
    }]
    let chef=[ {
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
    }]
    while (boleano=true){
        let menu =parseInt( prompt(
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
                ingredientesf(ingredientes);
            }
            else if (opcion == 2) { 
                
            }
            else if (opcion == 3) {
            } 
            else if (opcion == 4) {
            }
             else if (opcion == 5) {
                boleano = false;
                console.log("ha salido del programa ");
            } else {
                console.log("opcion no valida");
            }
        }
    }

    
function ingredientesf(ingredientes){
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
    ingredientes.push(nuevo_in)
    alert("se añadio el ingrediente")
    };
    
    
}