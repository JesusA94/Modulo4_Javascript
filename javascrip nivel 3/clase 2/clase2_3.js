imagenes=["Chrysanthemum.jpg","Desert.jpg","Hydrangeas.jpg",
"Jellyfish.jpg","Koala.jpg","Lighthouse.jpg",
"Penguins.jpg","Tulips.jpg"]
$("#1").on("click", function()
{
    // SE AGREGA AL FINAL DE LOS P
 $("p").append($("#buscar").val().toUpperCase())
 // se cambia el text
 $("h2").text($("#buscar").val())
 // se vacia el input
 $("#buscar").val("")



 //let n=(Math.random()*(imagenes.length-1)).toFixed(0);
 //$("section img").attr("src","img/" +imagenes[n])

 window.setInterval(function(){
    let n=(Math.random()*(imagenes.length-1)).toFixed(0);
    $("section img").attr({
        "src":"img/"+imagenes[n],
        "alt":imagenes[n],
        "title":imagenes[n]
    });
    $("h2").text(imaneges[n]);
},2000) })