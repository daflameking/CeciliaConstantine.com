// Load before other elements so user doesn't see the switch
$(window).ready(function() {
    changeScrollerIcon();
});

$(document).ready(function() {
    showNav();
    navFlex();
    printCurrentYear();
});


// METHODS
function showNav() {
    $("#mobile-menu").on("click", (function() {
        $("#overlay").toggle();
    }));

    $("#overlay a").on("click", function() {
        $("#overlay").toggle(false);
    });
}

function navFlex() {
    $("#overlay").toggle(function() {
        while ($(this).toggle(true)) {
            $("#overlay").css("display", "flex");
        }
    });
}

function changeScrollerIcon() {
    if ($(window).width() >= 650) {
        $("#scroll-icon").attr("src", "src/assets/icons/001-mouse-clicker.png");
    } else {
        $("#scroll-icon").attr("src", "src/assets/icons/013-hand.png");
    }
};

function printCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copy-year").innerHTML = currentYear;
}



// EVENT LISTENERS
document.addEventListener("scroll", function() {
    var menu = document.getElementById("mobile-menu");

    if (document.body.scrollTop >= 605) {
        menu.style.background = "#eb8cb6";
        menu.style.boxShadow = "1px 5px 32px -9px #555";
    } else {
        menu.style.background = "transparent";
        menu.style.boxShadow = "none";
    }
});