#! /usr/bin/env node


import inquirer from 'inquirer';

const answer = await inquirer.prompt([
{message: "Enter first number" , type: "number" , name: "firstNumber"},
{message: "Enter second number" , type: "number" , name: "secondNumber"},
{message: "Enter second number" , type: "list" , name: "options", choices: ["+", "-", "*", "/"]}
])

if (answer.options === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.options === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.options === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.options === "/") {
  console.log(answer.firstNumber / answer.secondNumber);
}
console.log("THE END")