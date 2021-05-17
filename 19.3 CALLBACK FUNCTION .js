function callBack(person1, person2, person3) {
    console.log(person1, "eat food");
    console.log(person2, "wash hand");
    eatBevarage();
    person3();

}
callBack("Avdullah al Masud","Abdur Rahim", hi);
callBack("Noman ali Khan", "Abdullah", hi2);
// callBack("Abdullah");
function eatBevarage() {
    console.log("Eat sweet");
}

function hi(){
    console.log("What is your Name...?");
}
function hi2(){
    console.log("What is your age..?");
}