#! /usr/bin/env node

import inquirer from "inquirer";

const randaomNumer = Math.floor(Math.random() *6 + 1);

console.log("Welcome to number guessing game");


const answer = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Kindly guess a random number from 1 to 6",
    }
]);

if(answer.userGuessedNumber === randaomNumer){
    console.log("Congratulations You Guessed The Right Number")
}else {
    console.log("Sorry You Guesed The Wrong Number")
}