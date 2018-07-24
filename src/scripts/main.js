// These need to be loaded before other elements so user doesn't see the switch
// $(window).ready(function() {
//     changeScrollerIcon();
// });

$(document).ready(function() { 
    changeNavIcon(); 
    showNav();
    closeNavWithLinks();
    printCurrentYear();
});

// GLOBAL VARIABLES
let mobileMenu = document.getElementById("mobile-menu");
let overlay = document.getElementById("overlay");
let icon = document.getElementById("menu-icon");

// METHODS
function showNav() { 
    $(mobileMenu).on("click", function() {
        $(overlay).toggle();   
    });
}

function changeNavIcon() {
    $(mobileMenu).on("click", function() {
    $(icon).text(
        icon.textContent == "close" ? "menu" : "close"
    )
    });
}

function closeNavWithLinks() {
    $("#overlay a").on("click", function() {
        $(overlay).toggle(false); 
        $(icon).text("menu");
    });   
}

function printCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copy-year").textContent = currentYear;
}

document.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 605) {
        mobileMenu.style.background = "#eb8cb6";
        mobileMenu.style.boxShadow = "1px 5px 32px -9px #555";
    } else {
        mobileMenu.style.background = "transparent";
        mobileMenu.style.boxShadow = "none";
    }
});
