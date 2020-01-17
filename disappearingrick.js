$(document).ready(function(){
    $("img").click(function(){
        $(this).fadeOut(500);        
    })

    $("button").click(function(){
        $("img").fadeIn(200);
    });
});