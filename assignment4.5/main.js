
function isLeapYear(year) {
    if(year % 4 != 0)
        return false;
    if(year % 100 == 0) {
        if(year % 400 == 0)
            return true;
        else
            return false;
    }
    return true;
}

if(isLeapYear(2012) == true) {
    console.log("It is indeed a leap year");
}
else {
    console.log("This is not a leap year");
}


