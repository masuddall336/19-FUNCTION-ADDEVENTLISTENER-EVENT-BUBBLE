// var arry = [2, 4, 2, 6, 7, 9, 5];
// for(i = 0; i <arry.length; i++){
//     var takeArry = arry[i];
//     numb(takeArry);
// }


function numb(userin) {
        if(userin % 2 == 0){
            console.log(userin,"yes");
        }else{
            console.log(userin,"no");
        }
} 
function nanumb2(userin2) {
    for (var i = 0; i < userin2.length; i++) {
        var userin22 = userin2[i];
        numb(userin22)
    }
}
var ras = [2, 4, 6, 8, 3, 5, 7, 124];
nanumb2(ras);
numb(ras);





// var arry2 = [2, 4, 2, 6, 7, 9];
// for (var i = 0; i < arry2.length; i++) {
//     var takear = arry2[i];
//     // if(takear % 2 == 0){
//     //     console.log(takear,": it is even number");
//     // }else{
//     //     console.log(takear * 2,":it is odd number");
//     // }
//     numb(takear);
// }