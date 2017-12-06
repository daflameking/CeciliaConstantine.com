// $(document).ready( function(){
//   var headerZone = $(".jumbotron").length;

//   $(window).scroll(function() {

//     if ($(window).scrollTop() > headerZone ) {
//         $("#myNavbar").addClass('sticky');
//     } else {
//         $("#myNavbar").removeClass('sticky');
//     }
//   });

// });


/* Save this for later
******************************
$(document).ready( function(){

function scrollUp (){
$('#start').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
}
});
*/

$(document).ready(function(){
    showNav(); 
    navFix();
});

function showNav() {
    $("#mobile-menu").on("click", (function () {
        $("#overlay").toggle();
}));
}
// toggle display true =show element and false=hide element
function navFix() {
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

