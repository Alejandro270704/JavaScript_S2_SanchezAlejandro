//creo una funcion para el menu del simulador de gasto 
function simuladorGasto() {
    let boleano = true;
    let gastos1 = [];
    while (boleano) {
        //simulador de gasto 
        console.log("=============================================");
        console.log("        Simulador de Gasto Diario            ");
        console.log("=============================================");
        console.log("          Seleccione una opción:             ");
        console.log("         1. Registrar/eliminar/modificar gasto ");
        console.log("         2. Listar gastos                  ");
        console.log("         3. Calcular total de gastos");
        console.log("         4. Generar reporte de gastos");
        console.log("         5. Salir");
        console.log("=============================================");
        let opcion = prompt("eliga una opción numerica :");

        if (opcion == 1) {
            nuevoGasto(gastos1); // completado
        } else if (opcion == 2) { 
            lista_gasto(gastos1); //completado
        } else if (opcion == 3) {
            calcularGasto(gastos1);
        } else if (opcion == 4) {
            generarReporte(gastos1); // completado
        } else if (opcion == 5) {
            boleano = false;
            console.log("ha salido del programa ");
        } else {
            console.log("opcion no valida");
        }
    }
}

function nuevoGasto(gastos1) {
    console.log("menu de gastos");
    console.log("1.agregar un gasto ");
    console.log("2.modificar gasto ");
    console.log("3.eliminar gasto ");
    let opc = parseInt(prompt("ingrese opcion numerica:"));
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
    console.log("=============================================");
    console.log("           Generar Reporte de Gastos         ");
    console.log("=============================================");
    console.log("      1. Diario");
    console.log("      2. Semanal");
    console.log("      3. Mensual");
    console.log("      4. Regresar al menú principal");
    console.log("=============================================");
    let opc = parseInt(prompt("digite opcion numerica:"));

    if (opc == 1) {
        console.log(gastos1);
        console.log("formato esperado : dd/mm/yyyy");
        let fechabusqueda = prompt("digite la fecha exacta para calcular total de gasto :");
        let x = true;
        while (x == true) {
            console.log("=============================================");
            console.log("             ¿Que desea hacer?");
            console.log("=============================================");
            console.log("               1.ver reporte");
            console.log("               2.guardar reporte");
            console.log("               3.atras");
            console.log("=============================================");
            let opcion = prompt(" digite opcion numerica:");
            opcion = parseInt(opcion);
            if (opcion == 1) {
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        console.log(`${gastos1[i].categoria} - $${gastos1[i].monto} - ${gastos1[i].descripcion}`);
                    }
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
            console.log("=============================================");
            console.log("             ¿Que desea hacer?");
            console.log("=============================================");
            console.log("               1.ver reporte");
            console.log("               2.guardar reporte");
            console.log("               3.atras");
            console.log("=============================================");
            let opcion = prompt(" digite opcion numerica:");
            opcion = parseInt(opcion);
            if (opcion == 1) {
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        console.log(`${gastos1[i].categoria} - $${gastos1[i].monto} - ${gastos1[i].descripcion}`);
                    }
                }
            } else if (opcion == 2) {
                console.log("se guardó correctamente el reporte");
            } else if (opcion == 3) {
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
            console.log("=============================================");
            console.log("             ¿Que desea hacer?");
            console.log("=============================================");
            console.log("               1.ver reporte");
            console.log("               2.guardar reporte");
            console.log("               3.atras");
            console.log("=============================================");
            let opcion = prompt(" digite opcion numerica:");
            opcion = parseInt(opcion);
            if (opcion == 1) {
                for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].fecha == fechabusqueda) {
                        console.log(`${gastos1[i].categoria} - $${gastos1[i].monto} - ${gastos1[i].descripcion}`);
                    }
                }
            } else if (opcion == 2) {
                console.log("se guardó correctamente el reporte");
            } else if (opcion == 3) {
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
                        console.log(`${gastos1[i].categoria} - $${gastos1[i].monto} - ${gastos1[i].descripcion}`);
                    }
               }
    }
    if (opc==2){
        let categoriabusqueda=prompt ("ingrese la categoria a consultar:")
        for (let i = 0; i < gastos1.length; i += 1) {
                    if (gastos1[i].categoria == categoriabusqueda) {
                        console.log(`${gastos1[i].categoria} - $${gastos1[i].monto} - ${gastos1[i].descripcion}`);
                    }
               }
    }
}