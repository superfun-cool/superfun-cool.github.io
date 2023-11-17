window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        document.getElementById("navbar").style.display = "none";
    }
    else {
        document.getElementById("navbar").style.display = "flex";
    }
}
