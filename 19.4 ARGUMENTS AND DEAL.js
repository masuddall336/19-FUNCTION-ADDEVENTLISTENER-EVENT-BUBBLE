function addfun (input1, input2){
    // var ras =  input1 +input1;
    // return ras;
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const take = arguments[i];
        sum = sum + take;
    }
    return sum;
}
var rasult = addfun(10, 10, 5, 10);
console.log(rasult);