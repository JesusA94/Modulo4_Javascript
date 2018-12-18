// 1.- Validar que los datos no esten vacíos, que la cédula y la nota solo reciban números, 
// que la nota tenga un valor entre 0 y 100.
document.form1.cedula.onkeypress = validarNumeros;
document.form1.nota.onkeypress = validarNumeros;
function limpiar()
{
  document.form1.cedula.value="";
	document.form1.nombre.value="";
	document.form1.nota.value="";
}

function validarNumeros(e) 
{
  tecla = (e.keyCode != 0) ? e.keyCode : e.charCode;
    if (tecla == 8 || tecla == 9) return true;
         patron = /[0-9-]/;
          te = String.fromCharCode(tecla);
           return patron.test(te);
}
function camposVacios()
{
	campo=true;
  if (this.value=="")
  {
		alert("Debe llenar todos los campos");
		campo=false;
  }
  else campo=true;
}

function validarNota()
{
	nota=true;
  if (this.value=="")
  {
		alert("debe escribir la nota");
		nota=false;
  }
  else
  {
    if (this.value>0 || this.value <100)
    {
      nota=false;
			alert("la nota debe tener un Valor entre 0 y 100");
    }
    else
    {
			nota=true;
		}
	}
}




// 2.- Definir una función constructora para crear un objeto de la clase Alumno,
//  que tenga los atributos: cedula, nombre y nota
function Alumno(cedula, nombre, nota)
{
  this.cedula = cedula;
  this.nombre = nombre;
  this.nota = nota;
}
// 3.- Definir la función constructora para crear un objeto de la clase Seccion, 
// que tenga los atributos: número, curso y alumnos (un arreglo de la clase Alumno).
// Programar en la clase Sección un método que calcule el promedio de notas de los alumnos
//  de la sección


function Seccion(numero, curso, alumnos)
{
  this.numero = numero;
  this.curso = curso;
  this.alumnos = alumnos;
     
  acumulador=0;
   this.promedio=function()
  {
    for (let contador=0;contador<alumnos.length;contador++)
    {
			acumulador=(acumulador+document.form1.nota.value)/contador;
		}
  }
}


// 4.- Crear un objeto de la clase Seccion al cargarse la página, con un número y un 
// nombre de curso arbitrarios. Mostrar en algún lugar de la página el número de la sección,
//  el nombre del curso y el promedio de la sección
var seccion1=new Seccion('javascript','2761',alumnos);
var seccion2=new Seccion('Angular','2670',alumnos);
// 5.- Cuando el usuario haga click en un botón para agregar al alumno a la sección y 
// los datos sean válidos, se debe crear un objeto de la clase Alumno usando los datos
//  obtenidos del formulario, para luego agregar al alumno a la sección.
//   Mostrar en algún de la página los datos del nuevo alumno y el promedio actualizado de la sección



var javascript = new Seccion("2762", "JavaScript Nivel III", [])
document.getElementById("titulo-seccion").innerHTML = "Sección: " + javascript.numero + " " + javascript.curso