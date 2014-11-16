function validateForm() {
    var x = document.forms["myForm"]["formComment"].value;
    if (x == null || x == "") {
        alert("It would be nice if you type something!");
        return false;
    }
}
