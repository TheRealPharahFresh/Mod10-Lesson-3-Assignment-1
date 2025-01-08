/*
1. Length
2.toUpperCase()
3.substring(start,end)
4.split()
*/

let greeting = "Hello World!";

console.log(greeting.length)
console.log(greeting.toUpperCase)
console.log(greeting.substring(0, 5))
console.log(greeting.split(","))



// Search Techniques look for a string inside of a string

/*
1. .includes()
2. .indexof() case sensitive very first one
3. .lastIndexof() grabs the last index of
*/

let sentence = "The quick brown fox jumps over the lazy dog"

console.log(sentence.includes("fox"))
console.log(sentence.indexOf("the"))
console.log(sentence.lastIndexOf("the"))



//Regular Expressions reg ex

let post = "Hey @johndoe, did you see the new #JavaScript tutorial? #coding";

// .match()

let mentions = post.match(/@[A-Za-z0-9_]+/g)
console.log(mentions)

let hashtas = post.match(/#[A-Za-z0-9_]+/g)
console.log(hashtags)


//Exercise 1

let tasks = [];

function addTask(taskDescription) {
    tasks.push(taskDescription);

}

function removeTask(taskDescription) {
    let index = tasks.indexOf(taskDescription);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log('Task  "${taskDescription}" removed successfully. ');
    } else {
        console.log('Task "${taskDescription}" not found.');
    }
}

function updateTask(originalTask, updatedTask) {
    let index = task.indexOf(originalTask);
    if (index !== -1) {
        task[index] = updatedTask;
        console.log('Task "${originalTask}" updated to "${updatedTask}" sucessfully.');
    }else {
        console.log('Task "${originalTask}" not found.')
    }
}

addTask("Complete Assignment");
addTask("Buy Groceries")
addTask("Call mom")

console.log("Initial Task:", tasks);

removeTask("Buy groceries");
console.log("Task after removal: ", tasks);

updateTask("Call mom", "Call dad");
console.log("Task after update: ", tasks)