let myString: string, myNumber: number;
let myBool: boolean;
let myVar: any;

// 1 способ обозначить массив
// let strArr: string[];
// let numArr: number[];
// boolean[]

// 2 способ
let strArr: Array<string>;
let numArr: Array<number>;

let strNumTuple: [string, number];

// можно использовать конкатенацию строк, функцию, возвращающую строку, slice строки myString.slice(0, 3)
myString = "Hello";
// в кач-ве сиссел можно использовать математические выражения 5+5, десятичные 0xf00d, орицательные -11, дроби 5.83,
myNumber = 5;

myBool = true;

myVar = "Home";

strArr = ["Hello", "World"];
numArr = [1,2,3];

strNumTuple = ["Water", 42];
// strNumTuple = [42, "Water"] уже даст ошибку
// strNumTuple = ["Water", 42, 13, 45];

// присваивать значения можно сразу при объявлении типа
// можно присвоить еще null
let myVoid: void = undefined;

let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myString, myNumber);
console.log(myBool);
console.log(myVar);

console.log(strArr);
console.log(numArr);

console.log(strNumTuple);

console.log(myVoid);

console.log(myNull, myUndefined);
