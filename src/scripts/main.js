$(document).ready(function(){
    showNav(); 
    navFlex();
    changeScrollerIcon();
    printCurrentYear();
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
        $("#scroll-icon").attr("src","src/assets/icons/001-mouse-clicker.png");
    }
    else {
        $("#scroll-icon").attr("src","src/assets/icons/013-hand.png");
    }
 };

 function printCurrentYear () {
     var currentYear = new Date().getFullYear();
    document.getElementById("copy-year").innerHTML = currentYear;  
 }

document.addEventListener("scroll", function () {
    var menu = document.getElementById("mobile-menu");
    if (document.body.scrollTop >= 605) {
        menu.style.background = "#eb8cb6";
        }
        else {
        menu.style.background = "transparent";
        }
});


 /*
 * TODO:
    1. Add validation to contact sform (see formspree.io)
    2. Explore image loading with emergence.js
*/
