

var fecha = {
    dia :10,
    mes :10,
    año :2018,
    estaVencido :function (){
        return false;
    }
}
var producto = {
    nombre      :"harina",
    existencia  :0,
    precio      :250,
    excento     :false,
    moneda      :"bs",
    fechavecn   :{
        a :15,
        b :[10,15,19]
    },
    fechacompra :fecha,
    aumentar    :function (){
        this.precio = this.precio*1.2;
    },
    mostrar     :function (){
        console.log("El precio es "+this.precio+" "+this.moneda)
    }
}
producto.fechavecn.b[1];
producto.fechacompra.estaVencido();
producto.tipo = "amarilla";
console.log("la "+producto.nombre+" cuesta "+producto.precio)
console.log(producto.tipo+" "+producto.marca);
producto.mostrar();
producto.aumentar();
producto.mostrar();