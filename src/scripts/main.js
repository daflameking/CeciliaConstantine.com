// Load before other elements so user doesn't see the switch
$(window).ready(function() {
    changeScrollerIcon();
    $("#overlay").toggle(false);
});

$(document).ready(function() {
    showNav();
    closeNavWithLinks();
    // closeNav();
    printCurrentYear();
    // closeMenuToggle();
});


// METHODS
function showNav() { 
    $("#mobile-menu").on("click", (function() {
        $("#overlay").toggle(true);
        $("#overlay").css("display", "flex");
        $("#menu-icon").text("close");
    }));
}


// function closeMenuToggle() {
//     $("#menu-icon").change( function() {
//         $("#menu-icon").onclick = closeNav;
//     });   
// }

// function closeNav(){
//     $("#overlay").toggle(false);
// }

function closeNavWithLinks(){
    $("#overlay a").on("click", function() {
        $("#overlay").toggle(false);
        $("#menu-icon").text("menu");  
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


