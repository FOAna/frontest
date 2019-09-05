function factorial(num) {
    var mult = 1;
    if (num===0 || num===1) return mult;
    for (i=2; i<=num; i++) mult = mult*i;
    return mult;
}
console.log(factorial(6));