// Load before other elements so user doesn't see the switch
$(window).ready( function() {
    changeScrollerIcon();
});

$(document).ready(function(){
    showNav(); 
    navFlex();
    printCurrentYear();
    duplicate();
});

function showNav() {
    $("#mobile-menu").on("click", (function () {
        $("#overlay").toggle();
    }));
    $("#overlay a").on("click", function (){
        $("#overlay").toggle(false);
    });
}

// function duplicate () {
//     var x = document.getElementById("social-icons");
//     var clone = x.cloneNode(true);
//     var navDiv = document.getElementById("overlay");
//     document.navDiv.appendChild(clone);  
// }


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


 var menu = document.getElementById("mobile-menu");
 document.addEventListener("scroll", function () {
    if (document.body.scrollTop >= 605) {
        menu.style.background = "#eb8cb6";
        menu.style.boxShadow = "1px 2px 7px #888";
    }
    else {
    menu.style.background = "transparent";
    menu.style.boxShadow = "none";
    }
});



 /*
 * TODO:
    1. Add validation to contact sform (see formspree.io)
    2. Explore image loading with emergence.js
*/
