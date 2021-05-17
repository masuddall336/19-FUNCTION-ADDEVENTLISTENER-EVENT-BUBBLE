function take(userInput) {
    // for(i = 0; i < userInput.length; i++){
    //     var takeuserInput = userInput[i];
        if(userInput % 2 == 0){
            console.log(userInput,"even number");
        }else{
            console.log(userInput,"odd number");
        }
    
}
// var arry = [2,9,3,8,4,7,5,6];
var num = 11;
// take(arry);
take(num);



function take2(userInput2){
    var ret;
    if(userInput2 % 2 == 0){
        ret = userInput2;
    }else{
        ret =  userInput2 * 2;
    }
    return ret;
}
var zz = take2(13);
console.log(zz * zz);







function testFunction(userInput){
    var inin = [];
    for(i = 0; i < userInput.length; i++){
        var takeuserInput = userInput[i];
        var a = take2(takeuserInput);
        inin.push(a);
    }
    return inin;
}
var arry = [2, 4, 6, 8, 9];
var inin = testFunction(arry);
console.log(inin);
