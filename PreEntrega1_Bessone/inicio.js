
















let monto = 30000;
let confirmar = "";


function de_contado( monto, metodo_pago ){

    if( metodo_pago == "efectivo"){

        let descuento =  monto - ( monto * 0.05 );
        return descuento
    }


}
function calcular_cuota(monto, metodo_pago){
    if (metodo_pago == "credito"){
        let cuotas = prompt("ingrese la cantidad de cuotas 3,6 o 12");

        cuotas = parseInt(cuotas);
        

    

        if(cuotas == 3 ){
            interez = monto + (monto * 0.15);
            return interez
        }
        else if(cuotas == 6){
            interez = monto + (monto * 0.30);
            return interez
        }
        else if(cuotas == 12){
            interez = monto + (monto * 0.65);
            return interez
        }
    }
}

while (confirmar != "si"){

    confirmar = prompt("Desea confirmar la compra? (SI o NO)");

    if (confirmar == "si"){
        let metodo_pago = prompt("Como desea abonar? efectivo, transferencia o credito");
        



        let  precio_credito = calcular_cuota(monto, metodo_pago);
        let precio_efectivo = de_contado(monto,metodo_pago)

        if (metodo_pago == "credito"){
            console.log("eligio abonar con: ", metodo_pago);
            console.log("el total es: $",precio_credito);
        }
        else if (metodo_pago == "transferencia"){
            console.log("eligio abonar con: ", metodo_pago)
            console.log("el monto a abonar es $", monto)
            console.log(".:LOS DATOS DE LA CUENTA SON:.")
            console.log("CBU:00000004325365475366653")
            console.log("ALIAS: moto.fiesta.arbol")
        }
        else if(metodo_pago == "efectivo"){
            console.log("eligio abonar con: ", metodo_pago)
            console.log("el precio del producto con el descuento del 5% por abonar en efectivo es $", precio_efectivo)
        }

            

            


        }


    }



