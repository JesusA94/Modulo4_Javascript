//Objetivo 1
$(document).ready(function()
{
    let ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function()
    {
        if (this.readyState==4)
        {
            respuesta=JSON.parse(this.responseText)
            $("#mostrar").append
            (
                "<p>Nombre: "+respuesta.name+"</p>"+
                "<p>Estatura: "+respuesta.height+" cm </p>"+
                "<p>Color de Cabello: "+respuesta.hair_color+" (Rubio) </p>"+
                "<p>Color de Piel: "+respuesta.skin_color+"</p>"+
                "<p>Color de Ojos: "+respuesta.eye_color+"</p>"+
                "<p>Año de Nacimiento: "+respuesta.birth_year+"</p>"+
                "<p>Genero: "+respuesta.gender+"</p>");
        }
    }
    let url="https://swapi.co/api/people/1/";
    ajax.open("GET",url,true);
    ajax.send();
});

//Objetivo 2
$(document).ready(function()
{
    $.ajax
    ({
        url:"https://swapi.co/api/people/3/",
        type:"get",
        dataType:"JSON",
        success:function(respuesta)
        {
            $("#mostrar2").append
            (
                "<h5>Nombre: "+respuesta.name+"</h5>"+
                "<h5>Estatura: "+respuesta.height+" cm </h5>"+
                "<h5>Color de Cabello: "+respuesta.hair_color+" </h5>"+
                "<h5>Color de Piel: "+respuesta.skin_color+"</h5>"+
                "<h5>Color de Ojos: "+respuesta.eye_color+"</h5>"+
                "<h5>Año de Nacimiento: "+respuesta.birth_year+"</h5>"+
                "<h5>Genero: "+respuesta.gender+"</h5>"
            );
        },
        error: function()
        {
            console.log("Error:")
        },
        
    })
})

//Objetivo 3
$("#boton").click(function()
{
    $.ajax
    ({
        url:"https://swapi.co/api/people/4/",
        type:"get",
        dataType:"JSON",
        success:function(respuesta)
        {
            $("#mostrar3").html
            (
                "<h4>Nombre: "+respuesta.name+"</h4>"+
                "<h4>Estatura: "+respuesta.height+" cm </h4>"+
                "<h4>Color de Cabello: "+respuesta.hair_color+" </h4>"+
                "<h4>Color de Piel: "+respuesta.skin_color+"</h4>"+
                "<h4>Color de Ojos: "+respuesta.eye_color+"</h4>"+
                "<h4>Año de Nacimiento: "+respuesta.birth_year+"</h4>"+
                "<h4>Genero: "+respuesta.gender+"</h4>"
            );
        },
        error: function()
        {
            console.log("Error:")
        },
        
    })
});


//Objetivo 4

planetas = [];
var n = 0;
function buscar(respuesta)
{
    for( let i=0;i<n;i++)
    {
        if(respuesta.toLowerCase() == planetas[i].nombre.toLowerCase())
        {
            return planetas[i].id;
        }
    }
}
