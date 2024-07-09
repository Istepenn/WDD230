document.addEventListener("DOMContentLoaded", function() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.visitcount) {
            localStorage.visitcount = Number(localStorage.visitcount) + 1;
        } else {
            localStorage.visitcount = 1;
        }
        document.getElementById("visitCounter").innerHTML = "Visit Count: " + localStorage.visitcount;
    } else {
        document.getElementById("visitCounter").innerHTML = "Sorry, your browser does not support web storage...";
    }
});
