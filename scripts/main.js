$(document).ready(function(){
    showNav(); 
    navFlex();
});

function showNav() {
    $("#mobile-menu").on("click", (function () {
        $("#overlay").toggle();
}));
$("#overlay a").on("click", function (){
    $("#overlay").toggle(false);
});
}
// toggle display true =show element and false=hide element
function navFlex() {
    $("#overlay").toggle( function(){
        if ( $(this).toggle(true) ){
            $("#overlay").css("display","flex");
        }
    });
}

//     newFunction();

// function newFunction() {
//     if ($("#overlay").toggle(true)) {
//         $("#overlay").css("display", "flex");
//     }
//     else {
//         $("#overlay").css("display", "none"); 
//     }
// }
//$("#overlay").append("#contact-details");

