function getChar(event) 
{
	if (event.keyCode != 0) 
		return String.fromCharCode(event.keyCode) ;
	else
		if (event.charCode!=0) 
			return String.fromCharCode(event.charCode);   
		else 
			return null;
}

function validar_select(select,id){
	var mensaje_error=document.getElementById(id)
	if (select.selectedIndex == 0)
	{
		mensaje_error.innerHTML("Debe seleccionar una opcion valida")
		select.style.backgroundColor="#f97575"
		select.focus();
		return false;
	}else
		select.style.backgroundColor="lightgreen"
		return true;
}
		
function validarletra(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
	// para permitir backspace
    if (tecla==8 || tecla==9) return true; 
	// de define el conjunto de caracteres validas
	
	patron =/[A-Za-zÀ-ÿ\u00f1\u00d1\s]/;
	// se convierte a caracter
    te = String.fromCharCode(tecla); 
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
} 

function validar_numero(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
    // para permitir backspace
	if (tecla==8 || tecla==9) return true; 
    // de define el conjunto de caracteres validas
	patron = /[0-9-]/;
    // se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
}

function esta_vacio(campo,mensaje,id){
	var mensaje_error = document.getElementById(id)
	if (campo.value == "" ){
		campo.style.background="#f97575"
		mensaje_error.innerHTML=(mensaje)
		campo.focus();
		return true;	
	}else
		campo.style.background="lightgreen"
		mensaje_error.innerHTML=""
		return false;
}

function validarcorreo(correo){
	regx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	if (regx.test(correo.value))
		return true;
	else{
		correo.focus();
		return false;
	}
}

function validarnumero(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 

function numeroReal(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /[^0-9.-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}