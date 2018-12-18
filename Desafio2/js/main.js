$("#agregar").click(function() {
        $("#agregar").hide(200)
        $("#mostrar").hide(200)
        $("#form-div").fadeIn(1000)
        $(".contenedor-res").hide(1000)
        $("#table").hide(1000)
        $("#mensaje").hide(200)
        $(".error").show();
      
        
})

$("#mostrar").click(function() {
    $("#agregar").fadeIn(200)
    $("#mostrar").hide(200)
    $(".contenedor-res").fadeIn(1000)
    $("#table").fadeIn(1000)
    $("#mensaje").hide(200)
    $(".error").hide();
    
})


//Validar//

$("#procesar").click(function(e){

    
    if ($('#codigo_prod').val() === ""||
    ($('#nombre_prod').val() === ""||
    ($('#stock_prod').val() === ""||
    ($('#cant_prod').val() === ""||
    ($('#precio_prod').val() === ""||
    ($('#select').val() === ""
    )))))){
        $('.error').append("<p>"+"Debes completar este campo"+"</p>");
        $('.error').css("background","#b00020");
      
    } else{
        
        $("#form-div").hide(1000)
        $("#mostrar").fadeIn(200)
        $("#agregar").fadeIn(200)
        $("#mensaje").fadeIn(200)
        $('#mensaje').css("background","rgba(54, 54, 54, 0.651)");
        $('.error').hide("slow")
        capturarObjeto()
        form1.reset()
    }
    
})

$('#codigo_prod').keyup(function(){
    if ($('#codigo_prod').val() !== ""){
        $('#error_codigo').hide("slow")
    }
})

$('#nombre_prod').keyup(function(){
    if ($('#nombre_prod').val() !== ""){
        $('#error_nombre').hide("slow")
    }
})

$('#stock_prod').keyup(function(){
    if ($('#stock_prod').val() !== ""){
        $('#error_stock').hide("slow")
    }
})

$('#cant_prod').keyup(function(){
    if ($('#cant_prod').val() !== ""){
        $('#error_cant').hide("slow")
    }
})

$('#precio_prod').keyup(function(){
    if ($('#precio_prod').val() !== ""){
        $('#error_precio').hide("slow")
    }
})

$('#select').click(function(){
    if ($('#select').val() != 1){
        $('#error_select').hide("slow")
    }
})
$(function(){
    //Escuchar al botón, esto no tiene nada que ver con el valor del checkbox
    $("#exento_iva").click(function(){ 
      var estaSeleccionado = $('#exento_iva').is(":checked");
      if(estaSeleccionado) $("#exento_iva").val("Si")
      else $("#exento_iva").val("No") 
    });
  });

$('#stock_prod').keypress(function (e){

	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
	if (tecla==8 || tecla==9) return true; 
    patron = /[0-9-]/;
	te = String.fromCharCode(tecla);
    return patron.test(te);
})

$('#precio_prod').keypress(function (e){

	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
	if (tecla==8 || tecla==9) return true; 
    patron = /[0-9-]/;
	te = String.fromCharCode(tecla);
    return patron.test(te);
})

$('#cant_prod').keypress(function (e){

	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
	if (tecla==8 || tecla==9) return true; 
    patron = /[0-9-]/;
	te = String.fromCharCode(tecla);
    return patron.test(te);
})

$('#nombre_prod').keypress(function (e){
	
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
    if (tecla==8 || tecla==9) return true; 	
	patron =/[A-Za-zÀ-ÿ\u00f1\u00d1\s]/;
    te = String.fromCharCode(tecla); 
    return patron.test(te);
})

function capturarObjeto(){

    function Producto(codigo,nombre,stock,
                      precio, cantidad,exen_iva,categoria){
        
        this.codigo = codigo;
        this.nombre = nombre;
        this.stock  = stock;
        this.precio = precio;
        this.cantidad = cantidad;
        this.exento = exen_iva;
        this.categoria = categoria;

    }
        var codigoInput = $('#codigo_prod').val()
        var nombreInput = $('#nombre_prod').val()
        var stockInput = $('#stock_prod').val()
        var precioInput = $('#precio_prod').val()
        var cantidadInput = $('#cant_prod').val()
        var exentoInput = $('#exento_iva').val()
        var categoriaInput = $('#select').val()

         nuevoProducto = new Producto(codigoInput,nombreInput,stockInput,precioInput,cantidadInput,exentoInput,categoriaInput)


            agregarDatos();
}
    var datosAlmacenados = []

    function agregarDatos(){

    datosAlmacenados.push(nuevoProducto);

    $('#table').append( "<tbody>"+
                        "<td>"+nuevoProducto.codigo+"</td>"+
                        "<td>"+nuevoProducto.nombre+"</td>"+
                        "<td>"+nuevoProducto.stock+"</td>"+
                        "<td>"+nuevoProducto.precio+" $"+"</td>"+
                        "<td>"+nuevoProducto.cantidad+"</td>"+
                        "<td>"+nuevoProducto.exento+"</td>"+
                        "<td>"+nuevoProducto.categoria+"</td>"+
                        "</tbody>")
}

