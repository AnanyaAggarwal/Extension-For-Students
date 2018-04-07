function validateUsername(str) {
    var error = "";
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
    var pattern = "https://github.com/" + document.myform.github.value;;

    if (str == "") {
        error = "&bull; Please enter Username<br>";
    } else if ((str.length < 5) || (str.length > 15)) {
        error = "&bull; Username must have 5-15 characters<br>";
    } else if (.test(str)) {
  	error = "&bull; Please enter valid Username. Use only numbers and alphabets<br>";
    } else {
        error = "";
    }
    return error;
}