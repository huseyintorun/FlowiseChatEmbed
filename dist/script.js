document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("notification").style.display = "flex";
    }, 3000); // 3 saniye sonra göster

});

function closeNotification() {
    document.getElementById("notification").style.display = "none";
}
