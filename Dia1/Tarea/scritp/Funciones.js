
//creo una funcion para el menu del simluadorde gasto 
function simuladorGasto (){
    boleano=True;
    while (boleano){
        //simulador de gasto 
        console.log ("=============================================");
        console.log ("        Simulador de Gasto Diario            ");
        console.log ("=============================================");
        console.log ("          Seleccione una opción:             ");
        console.log ("         1. Registrar/eliminar/modificar gasto ");
        console.log ("         2. Listar gastos                  ");
        console.log ("         3. Calcular total de gastos");
        console.log ("         4. Generar reporte de gastos");
        console.log ("         5. Salir");
        console.log ("=============================================");
         let opcion=prompt("eliga una opción numerica :");
        if (opcion==1 ){
            nuevoGasto();
        }
            
        else if (opcion==2) {
            lista_gasto();
        }
            
        else if (opcion==3){
            calcularGasto();
        }
            
        else if (opcion==4){
            generarReporte();

        }
        else if (opcion==5){
            boleano=False;
            console.log ("ha salido del programa ");
        }
        else (console.log("opcion no valida"))
            

    }
       

}
function generarReporte(){
    console.log("=============================================");
    console.log("           Generar Reporte de Gastos         ");
    console.log("=============================================");
    console.log("      1. Diario");
    console.log("      2. Semanal");
    console.log("      3. Mensual");
    console.log("      4. Regresar al menú principal");
    console.log("=============================================");
    let opc =prompt ("digite opcion numerica:");
    opc=parseInt(opc);
    total=0;
    diccionarioCategoria={};
}
    
    
   
    
    if (opc ==1){ 
        console.log ("formato esperado : dd/mm/yyyy");
        let fechaInicio =prompt("digite la fecha exacta para calcular total de gasto :");
        fechaInicio=parseInt(fechaInicio);
       
        for (let gasto of usuarioActual.gastos){
            console.log ("=============================================");
            console.log  ("             ¿Que desea hacer?");
            console.log("=============================================");
            console.log ("               1.ver reporte");
            console.log ("               2.guardar reporte");
            console.log("=============================================");
            let opcion=prompt(" digite opcion numerica:");
            opcion=parseInt(opcion);
        if (opcion==1){
            reporte=verYguardar_reporte(fechaInicio,diccionarioCategoria,total);
        }
            
            console.log("se guardó correctamente el reporte: {reporte}")};
    
    
        }
        
               
                        
       