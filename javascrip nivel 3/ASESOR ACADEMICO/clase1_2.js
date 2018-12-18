
var productos = [
    {
        nombre      :"harina",
        fechaVecn   :{
            dia :15,
            mes :12, 
            año :2019
        },
        precios     :[150,200,225]
    },
    {
        nombre      :"arroz",
        fechaVecn   :{
            dia :22,
            mes :10, 
            año :2020
        },
        precios     :[
            {
                monto:160,
                moneda:"bs"
            },
            {
                monto:2.5,
                moneda:"$"
            }
        ]
    }
]
/*
// el objeto completo producto que esta en la posicion 1 
productos[1] 
// el atributo nombre del objeto 1
productos[1].nombre 
// el atributo año del objeto fecha del objeto producto 1
productos[1].fechaVecn.año 
// el primer precio del producto 1
productos[1].precios[0]
*/

// un ciclo para recorrer los productos
for (j=0;j<productos.length;j++){
    // se accede a los atributos del producto J
    console.log("Precios de ",productos[j].nombre)
    console.log("Se vence el año ",productos[j].fechaVecn.año)
    // un ciclo para recorrer los precios del producto J
    for (i=0;i<productos[j].precios.length;i++){
        // se muestra el precio I del producto J
        console.log(productos[j].precios[i].monto)
    }
}
