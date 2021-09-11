//1       //2
function hello() {
    //3
    console.log("Hello World!");
}
hello()

function pacersWon(){
    console.log("Pacers Won!");
}
pacersWon();
pacersWon();
pacersWon();

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(18, 24);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function addAnyTwoNumbers(x, y){
    let sum = x + y;
    return sum;
}
console.log(addAnyTwoNumbers(675,234));

function calculateTotalPriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return 1.07 * quantity * price;
}
console.log(calculateTotalPriceIndiana(3, 4.99));

function combineTwoWords(x, y) {
    let sum = x + y;
    return x + y;
  }
  console.log(combineTwoWords("hHllo ","World"));