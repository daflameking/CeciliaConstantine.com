// These need to be loaded before other elements so user doesn't see the switch
$(window).ready(function() {
    changeScrollerIcon();
    $(overlay).toggle(false);
});

$(document).ready(function() { 
    changeNavIcon(); 
    showNav();
    closeNavWithLinks();
    printCurrentYear();
});

// GLOBAL VARIABLES
var mobileMenu = document.getElementById("mobile-menu");
var overlay = document.getElementById("overlay");
var icon = document.getElementById("menu-icon");

// METHODS
function showNav() { 
    $(mobileMenu).on("click", function() {
        $(overlay).toggle();   
    });
}

function changeNavIcon() {
    $(mobileMenu).on("click", function() {
    $(icon).text(
        $(icon).text() == "close" ? "menu" : "close"
    )
    });
}

function closeNavWithLinks(){
    $("#overlay a").on("click", function() {
        $(overlay).toggle(false); 
        $(icon).text("menu");
    });   
}

function changeScrollerIcon() {
    var scroller = document.getElementById("scroll-icon");
    if ($(window).width() >= 650) {
        $(scroller).attr("src", "src/assets/icons/001-mouse-clicker.png");
    } else {
        $(scroller).attr("src", "src/assets/icons/013-hand.png");
    }
};

function printCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copy-year").innerHTML = currentYear;
}



// EVENT LISTENERS
document.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 605) {
        mobileMenu.style.background = "#eb8cb6";
        mobileMenu.style.boxShadow = "1px 5px 32px -9px #555";
    } else {
        mobileMenu.style.background = "transparent";
        mobileMenu.style.boxShadow = "none";
    }
});


