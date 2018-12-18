//--Cargar Arreglos
var codigos = ["aaa111", "bbb222", "ccc333", "ddd444", "eee555", "fff666"];
var nombres = ["Agua", "Barra", "Carbon", "Dulce", "Espaguetti", "FrutosSecos"];
var precios = [100,200,300,400,500,600];
var existencias = [10,10,10,10,10,10];


//--VALIDAR QUE EL CAMPO SOLO ACEPTE NUMEROS--

function validarnumero(e) {
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 

//--VALIDAR VACIOS Y LONGITUD--
document.form1.codigo.onkeyup=function(){
    for (let c = 0; c < codigos.length; c++) {
        if(document.form1.codigo.value =="" ||
            document.form1.codigo.value.length <= 5 ||
            document.form1.codigo.value.length > 6){
            document.getElementById("error_codigo").innerHTML=
            "Debe ingresar un codigo valido";
            document.form1.codigo.style.backgroundColor ="#f97575"
            document.form1.codigo.focus();
        }else if (document.form1.codigo.value == codigos[c]){
            document.getElementById("error_codigo").innerHTML="";
            document.form1.codigo.style.backgroundColor ="lightgreen"
        }
        
    }
}

//--ENVIAR DATOS ENTER
document.form1.codigo.onkeypress=function(e){
    if (e.keyCode === 13){
        buscarDatos();
    }
}

//--Cargar inputs--
function buscarDatos() {
    var code = document.form1.codigo;
    var prize = document.form1.precio_prod;
    var name = document.form1.nombre_prod;
    var stock = document.form1.stock;
    for (let i = 0; i < codigos.length; i++) {
        if (code.value == codigos[i]){
            pos = i; 
        name.value = nombres[i];
        prize.value = precios[i];
        stock.value = existencias[i];
        document.form1.cantidad.disabled=false;
        return true;
    }
    }
} 
//--Validar Cantidad--

document.form1.cantidad.onkeyup = function(){
    
    var cant = document.form1.cantidad.value;
    var prec = document.form1.precio_prod.value;
    for (let a = 0; a < existencias.length; a++) {  
        if (cant< 1 || cant=="" || cant > existencias[a]){
            document.getElementById("error_cant").innerHTML=
            "Debe ingresar una cantidad valida";
            document.form1.cantidad.style.backgroundColor ="#f97575"
            document.form1.cantidad.focus();
        }else {
            document.getElementById("error_cant").innerHTML="";
            document.form1.cantidad.style.backgroundColor ="lightgreen"
        }
        
        document.form1.subtotal.value = (cant*prec);

}
}

function esta_vacio(campo,mensaje,id){
	var mensaje_error = document.getElementById(id)
	if (campo.value == "" ){
		campo.style.background="#f97575"
		mensaje_error.innerHTML=(mensaje)
		campo.focus();
		return true;	
	}else
		campo.style.background="black";
		mensaje_error.innerHTML="";
		return false;
    }

function validar(){
   if (document.form1.codigo.value =="" || 
       document.form1.nombre_prod.value==""||
       document.form1.precio_prod.value==""||
       document.form1.cantidad.value==""||
       document.form1.subtotal.value==""){
       alert("Debes completar todos los campos")
   }else{
    
    creartabla();
    form1.reset();
   }
}

function creartabla(){

    var tabla= document.getElementById("factura")
 
        tabla.innerHTML=""
        tabla.innerHTML+="<td>"+"#"+ document.form1.codigo.value+"</td>"
        tabla.innerHTML+="<td>"+""+ document.form1.nombre_prod.value+"</td>"
        tabla.innerHTML+="<td>"+"BsS."+ document.form1.precio_prod.value+"</td>"
        tabla.innerHTML+="<td>"+""+ document.form1.cantidad.value+"</td>"
        tabla.innerHTML+="<td>"+"BsS."+ document.form1.subtotal.value+"</td>"
}


document.form1.cantidad.onkeypress=validarnumero;    
document.form1.procesar.onclick=validar;