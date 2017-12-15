$(document).ready(function(){
    showNav(); 
    navFlex();
    changeScrollerIcon();
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
    
 function changeScrollerIcon(){
    if ($(window).width() >= 650 ){
        $("#scroll-icon").attr("src","assets/icons/001-mouse-clicker.png");
    }
    else {
        $("#scroll-icon").attr("src","assets/icons/013-hand.png");
    }
 };
