#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome TO \'CodeWithZaryab\ - CLI Number Guessing\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "PLease guess a number between 1-10: ",
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
