let arr = [1,1];
let userInput = parseInt(prompt("Please enter the number", "ex:4"));
let nextNumber = 0;

for (let i = 0; i < (userInput -2); i++) {
    nextNumber = arr[i] + arr[i+1];
    arr.push(nextNumber);
}

console.log(arr[userInput-1]);

