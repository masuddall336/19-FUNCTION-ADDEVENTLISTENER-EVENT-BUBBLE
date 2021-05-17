function numb(userin) {
    for (var i = 0; i < userin.length; i++) {
        var userin22 = userin[i];
        // numb(userin22);
        if(userin22 % 2 == 0){
            console.log(userin22,"yes");
        }else{
            console.log(userin22,"no");
        }
    }

} 

var ras = [2, 4, 6, 8, 3, 5, 7, 124];
// nanumb2(ras);
numb(ras);