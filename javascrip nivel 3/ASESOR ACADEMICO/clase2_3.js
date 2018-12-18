imagenes = ["Chrysanthemum.jpg","Desert.jpg","Hydrangeas.jpg",
            "Jellyfish.jpg","Koala.jpg","Lighthouse.jpg",
            "Penguins.jpg","Tulips.jpg"];

$("nav").click(function(){
    $("nav").toggleClass("x");
})


window.setInterval(function(){
    let n=(Math.random()*(imagenes.length-1)).toFixed(0);
    $("section img").attr({
        "src":"img/"+imagenes[n],
        "alt":imagenes[n],
        "title":imagenes[n]
    });
    $("h2").text(imagenes[n]);
},2000)

$("#1").on("click",function(){
    // se agrega al final de los p
    $("p").append($("#buscar").val().toUpperCase())
    // se cambia el text
    $("h2").text($("#buscar").val());
    // se vacía el input
    $("#buscar").val("")
    

})