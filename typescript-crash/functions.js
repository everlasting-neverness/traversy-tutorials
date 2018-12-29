function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 - num2;
};
console.log(mySum(5, 2));
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getName("John"));
function myVoid() {
    return;
}
console.log(myVoid());
// function a() {
//   let o = {a: 1, b: 2};
//   return {...o, c: 6}
// }
//
// console.log(a())
