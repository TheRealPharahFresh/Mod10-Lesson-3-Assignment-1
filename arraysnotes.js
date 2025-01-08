/*
1. Push
2.Pop
3.map
4. Filter
5.reduce
*/
//1
let numbers = [10,20,30,40,50];


numbers.push(60)

console.log(numbers)

function addNumber(arr, num) {
    arr.push(num);
    return arr;

}
console.log(addNumber(numbers,60))

//2
numbers.pop(60)

console.log(numbers)


function removelastnumber(arr) {
    arr.pop();
    return arr;
}

removelastnumber(numbers)

//3 Filter and map create new arrays
function doublenumbers(arr){
    return arr.map(num => num * 2)
}
console.log(doublenumbers(numbers))


//4
function filternumbers(arr){
    return arr.filter(num => num > 25 )
}



//5 Reduce: Acc = Accrued  - Result of al the previous iterations Curr = Current - iteration or values 
function calaculatesum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)

}

console.log(calaculatesum(numbers))



/*
1.Sort
2.Iteration
3.Destructuring
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"]


//1.
fruits.sort()
console.log(fruits)

//For it to work with numbers a - b lets js know which is the lowest number and then sorts
numbers.sort((a, b) => a - b)
console.log(fruits)


//2.
console.log("Iterating over fruits");
for (let fruit of fruits) {
    console.log(fruit);
}


//3.Destructuring arrays, first and second are just place holders

let [first, second] = fruits;
console.log("First Fruit:" ,first);
console.log("Second Fruit: ", second);


// Spread & Rest Operators

//1.Spread is for expanding not taking away

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedArray = [...arr1, ...arr2];
console.log("Combined Array:", combinedArray);


//2. Rest operator for extracting elements

let [first, second, ...remaining] = combinedArray;
console.log("First Element: ", first);
console.log("Second Element: ", second);
console.log("Remaing Elements: ", remaining)
