//creo una funcion para el menu del simulador de gasto 
function simuladorGasto() {
    let boleano = true;
    let gastos1 = [];
    let reportes=[];
    while (boleano) {
        //simulador de gasto      
        
        let opcion =parseInt( prompt(
        `============================================
                Simulador de Gasto Diario            
        ============================================
        Seleccione una opción:
        1. Registrar/eliminar/modificar gasto
        2. Listar gastos
        3. Calcular total de gastos
        4. Generar reporte de gastos
        5. Salir
        ============================================
        Eliga una opción numerica`
        ))
        

        if (opcion == 1) {
            nuevoGasto(gastos1); // completado
        } else if (opcion == 2) { 
            lista_gasto(gastos1); //completado
        } else if (opcion == 3) {
            calcularGasto(gastos1); // completado 
        } else if (opcion == 4) {
            generarReporte(gastos1,reportes); // completado
        } else if (opcion == 5) {
            boleano = false;
            console.log("ha salido del programa ");
        } else {
            console.log("opcion no valida");
        }
    }
}

function nuevoGasto(gastos1) {
    let opc = parseInt(prompt(
    `
    ============================================
                    menu de gastos
    ============================================
    1.agregar un gasto 
    2.modificar gasto 
    3.eliminar gasto 
    ingrese opcion numerica:`))
    let descripcion = "";

    if (opc == 1) {
        let monto = parseFloat(prompt("digite su gasto:"));
        let categoria = prompt("digita la categoria:");
        let fecha = prompt("digite la fecha dd/mm/yyyy:");
        let opinion = parseInt(prompt("quieres agregar una descripcion?:1:si  2:no:"));
        if (opinion == 1) {
            descripcion = prompt("escribe la descripcion");
        } else {
            descripcion = "";
            console.log("no se agrego ninguna descripcion");
        }
        let gasto = {
            monto: monto,
            categoria: categoria,
            fecha: fecha,
            descripcion: descripcion
        };
        gastos1.push(gasto);
        console.log("se añadio el gasto");
    } else if (opc == 2) {
        let ultimo = gastos1.length - 1;
        let monto = parseFloat(prompt("Nuevo monto:"));
        let categoria = prompt("Nueva categoría:");
        let fecha = prompt("Nueva fecha (dd/mm/yyyy):");
        let descripcion = prompt("Nueva descripción:");
        gastos1[ultimo].monto = monto;
        gastos1[ultimo].categoria = categoria;
        gastos1[ultimo].fecha = fecha;
        gastos1[ultimo].descripcion = descripcion;
    } else if (opc == 3) {
        console.log(gastos1);
        let confirmarcion = prompt("¿Estás seguro que quieres eliminar el último gasto? (s/n:)");
        if (confirmarcion == "s") {
            gastos1.pop();
            console.log("gasto eliminado ");
        } else {
            console.log("no se elimino ");
            prompt("enter para continuar");
        }
    }
    return gastos1;
}

function generarReporte(gastos1) {
    let opc = parseInt(prompt(`
    ============================================
               Generar Reporte de Gastos        
    ============================================
          1. Diario
          2. Semanal
          3. Mensual
          4. Regresar al menú principal
    ============================================
    digite opcion numerica:`))
    
    

    if (opc == 1) {
        console.log(gastos1);
        alert("formato esperado : dd/mm/yyyy");
        let fechabusqueda = prompt("digite la fecha exacta para calcular total de gasto :");
        let x = true;
        while (x == true) {
            let opcion = parseInt(prompt(` 
        ============================================
                     ¿Que desea hacer?
        ============================================
                       1.ver reporte
                       2.guardar reporte
                       3.atras
        ============================================
         digite opcion numerica:`))
       
            
                
            if (opcion == 1) {
                let encontrado = false;
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        alert(`
                            ============================================
                                        Reporte de gastos
                            ============================================
                            categoría: ${gastos1[i].categoria}
                            monto: $ ${gastos1[i].monto}
                            fecha: ${gastos1[i].fecha}
                            descripción: ${gastos1[i].descripcion}
                            ============================================`)
                            encontrado = true;
                    }
                }
                if (!encontrado){
                        alert("no se encontro el gasto en esa fecha")
                    }
            } 
            else if (opcion == 2) {
                console.log("se guardó correctamente el reporte");
            } 
            else if (opcion == 3) {
                x = false;
            }
        }
    }
    if (opc == 2) {
        console.log(gastos1);
        console.log("formato esperado : dd/mm/yyyy");
        let fechabusqueda = prompt("digite la fecha exacta para calcular total de gasto :");
        let x = true;
        while (x == true) {
            let opcion = parseInt(prompt(`
            ============================================
                         ¿Que desea hacer?
            ============================================
                           1.ver reporte
                           2.guardar reporte
                           3.atras
            ============================================
             digite opcion numerica:
            opcion = parseInt(opcion);`))
            
            if (opcion == 1) {
                let encontrado = false;
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        alert(`
                            ============================================
                                        Reporte de gastos
                            ============================================+
                            categoría: ${gastos1[i].categoria}
                            monto: $ ${gastos1[i].monto}
                            fecha: ${gastos1[i].fecha}
                            descripción: ${gastos1[i].descripcion}
                            ============================================`)
                            encontrado = true;
                        }
            }
                if (!encontrado){
                    alert("no se encontro el gasto en esa fecha")
                    }} 
            
            else if (opcion == 2) {
                console.log("se guardó correctamente el reporte");
            } 
            else if (opcion == 3) {
                x = false;
            }
        }
    }

    if (opc == 3) {
        console.log(gastos1);
        console.log("formato esperado : dd/mm/yyyy");
        let fechabusqueda = prompt("digite la fecha exacta para calcular total de gasto :");
        let x = true;
        while (x == true) {
            let opcion = parseInt(prompt(`
            ============================================
                         ¿Que desea hacer?
            ============================================
                           1.ver reporte
                           2.guardar reporte
                           3.atras
            ============================================
             digite opcion numerica:`))
             
            if (opcion == 1) {
                let encontrado = false;
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        alert(`
                            ============================================
                                        Reporte de gastos
                            ============================================+
                            categoría: ${gastos1[i].categoria}
                            monto: $ ${gastos1[i].monto}
                            fecha: ${gastos1[i].fecha}
                            descripción: ${gastos1[i].descripcion}
                            ============================================`)
                            encontrado = true;
                    }
                    
                }
                if (!encontrado){
                        alert("no se encontro el gasto en esa fecha")
                    }

            } 
            else if (opcion == 2) {
                console.log("se guardó correctamente el reporte");
            }
             else if (opcion == 3) {
                x = false;
            }
        }
    }

    if (opc == 4) {
        console.log("menu principal");
    }
}
//listar gastos
function lista_gasto(gastos1){
    console.log ("listar gasto por:")
    console.log ("1.fecha")
    console.log ("2.categoria")    
    let opc= parseInt(prompt("eliga opcion numerica:"))
    if (opc==1){
        console.log("formato esperado : dd/mm/yyyy");
        let fechabusqueda = prompt("digite la fecha exacta para calcular total de gasto :");
        for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        alert(gastos1[i].categoria +"- $"+  gastos1[i].monto+"-"+gastos1[i].fecha +"-"+ gastos1[i].descripcion);
                    }
               }
    }
    if (opc==2){
        let categoriabusqueda=prompt ("ingrese la categoria a consultar:")
        for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].categoria == categoriabusqueda) {
                        alert(gastos1[i].categoria +"- $"+  gastos1[i].monto+"-"+gastos1[i].fecha +"-"+ gastos1[i].descripcion);
                    }
               }
    }
}function calcularGasto(gastos1){
    let total=0;
    for (let i=0;i<gastos1.length;i+=1){
        total += gastos1[i].monto;}
    alert("============================================");
    alert("        Total de todos los gastos:" + total);
    alert("============================================");
    
}
