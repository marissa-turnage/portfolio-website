$(function() {
    // MOBILE MENU
    let $hamburger = $("#hamburger");
    let $mobileMenu = $("header nav ul");
    let $violinBtn = $("header nav a.button");
    $hamburger.on("click", function () {
        $mobileMenu.toggleClass("unhide");
        $violinBtn.toggleClass("unhide");
        if ($hamburger.attr("src") == "/images/menu.svg") {
            $hamburger.attr("src", "/images/x.svg");
        } else {
            $hamburger.attr("src", "/images/menu.svg");
        }
    });
    
    // HOME HOVER EFFECTS
    let $tiles = $("#home-work a section");
    $tiles
        .on("mouseenter", function() {
            $(this).find("p").fadeOut(50);
        })
        .on("mouseleave", function() {
            $(this).find("p").fadeIn(50);
        });
});