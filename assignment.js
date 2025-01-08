//Task1:


let fruits = ['apple', 'banana', 'orange'];

fruits.push("Mango", "Strawberry")

fruits.pop("Strawberry")

console.log(fruits)

//Task2:

let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b)
console.log(numbers)

//Task 3:

let numbers2 =[10,25,30,45,50,65]

function doublenumbers(arr) {
    return arr.map(num => num * 2)

}
console.log(doublenumbers(numbers2))


function filternumbers(arr) {
    return arr.filter(num => num % 2 ==+ 0);
}

console.log(filternumbers(numbers2))


function calaculatesum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)

}

console.log(calaculatesum(numbers2))


// 2. Exploring String Manipulation in JavaScript

let message = "Hello, World!";

console.log(message.length)
console.log(message.toUpperCase)


let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.substring(0,20))

let sentence2 = "The quick brown fox";
console.log(sentence2.split(" "))


