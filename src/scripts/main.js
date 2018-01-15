// Load before other elements so user doesn't see the switch
$(window).ready( function() {
    changeScrollerIcon();
});

$(document).ready(function(){
    showNav(); 
    navFlex();
    printCurrentYear();
});


/*
 * if mobile menu is clicked toggle overlay
 * if overlay is toggled add classes animated bounceIn === done through html class
 * if mobile menu icon is clicked while overlay is display flex aka toggle true add class bounceOut
 * Algo:
 * Remove the class from the html and do it all dynamically
 * use e.preventDefault: https://stackoverflow.com/questions/19927918/toggling-animations-when-using-animate-css
 * 
 * 
*/
function showNav() {
    $("#mobile-menu").on("click", (function () {
        $("#overlay").toggle();
    }));

    $("#overlay a").on("click", function (){
        $("#overlay").toggle(false);
    });
}

// function closingAnimation () {
//     if ( $("#overlay").toggle(true) ) {
//         $("mobile-menu").on("click", function () {
//             $("#overlay").addClass("bounceOut");
//         })
//     }
// }

function navFlex() {
    $("#overlay").toggle( function(){
        while ( $(this).toggle(true) ){
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
        menu.style.boxShadow = "1px 5px 32px -9px #555";
    }
    else {
        menu.style.background = "transparent";
        menu.style.boxShadow = "none";
    }
});

 /*
 * TODO:
    1. Add validation to contact sform (see formspree.io)
*/
