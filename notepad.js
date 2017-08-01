function palindrome(str) {
    var output = true;
    str = str.replace(/\W/g, '').toLowerCase();

    for (var i = 0, i2d2 = str.length - 1; i <= i2d2; i++, i2d2--) {
        var element = str[i];
        var element2 = str[i2d2];

        if (element !== element2) {
            output = false;
            break;
        }
    }
    return output;
}

palindrome('eye');