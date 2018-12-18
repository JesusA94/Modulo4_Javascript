
function Fecha(dia,mes,año){
    this.dia = dia;
    this.mes = mes;
    this.año = año;
}
var f = new Fecha(5,10,2018)

function Producto( nombre , existencia, precios,fecha){
    this.nombre     = nombre;
    this.existencia = existencia
    this.fechaVecn  = fecha,
    this.precios    = precios;
    this.aumentar   = function (){ 
        console.log("hola") 
    };
}

var p = new Producto("harina",10,[250,270,300],f )
p.aumentar();

var q = new Producto("arroz",55,[],new Fecha(15,10,2019) )
q.precios.push(150);
var productos = [];

productos.push(p);
productos.push(q);
productos.push(new Producto("pasta",620,[156,180],new Fecha(10,10,2020)))

for (j=0;j<productos.length;j++){
    // se accede a los atributos del producto J
    console.log("Precios de ",productos[j].nombre)
    console.log("Se vence el año ",productos[j].fechaVecn.año)
    // un ciclo para recorrer los precios del producto J
    for (i=0;i<productos[j].precios.length;i++){
        // se muestra el precio I del producto J
        console.log(productos[j].precios[i])
    }
}
// de objeto a String
objeto_str = JSON.stringify(p)
// de string a objeto
p = JSON.parse(objeto_str) 
