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
    
    $("#home-work section").on("mouseenter", function() {
        $(this).addClass("tile-hover");
        $(this).children("a").hide();
    });
    $("#home-work section").on("mouseleave", function() {
        $(this).removeClass("tile-hover");
        $(this).children("a").show();
    });
});