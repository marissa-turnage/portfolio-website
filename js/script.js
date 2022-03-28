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
});