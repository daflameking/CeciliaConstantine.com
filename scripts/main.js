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

 /*
 * TODO:
    1. When fixed mobile icon is over the #home section, #mobile-menu background fades transparent
    2. Add validation to contact form (see formspree.io)
    3. Turn browser window tab different color on mobile devices
    4. Explore image loading with emergence.js
*/