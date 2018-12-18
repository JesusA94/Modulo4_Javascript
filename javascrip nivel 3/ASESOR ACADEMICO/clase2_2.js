
$("#buscar").on("keypress",function(e){
    if (this.value.length>0){
        let tecla=e.keyCode?e.keyCode:e.keyChar;
        if (tecla==13){
            alert("Presiono enter")
        }
    }
})

$("#1,#2,#3").on("click",function(){
    var id=this.id;

    $("#img"+id).hide();
    setTimeout(function(){
        $("#img"+id).show()
    },2000);
})

$("p, h2").click(function(){
    alert(this.innerHTML)
})

$(".galeria img").click(function(){
    $(".galeria").hide();
});

$("#logo").click(function (){
    $(this).hide();
})


