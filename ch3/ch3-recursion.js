function isEven(a) {
    if (isNaN(a) || a < 0) return null;
    else if (a === 0) return true;
    else if (a === 1) return false;
    else return isEven(a - 2); 
}