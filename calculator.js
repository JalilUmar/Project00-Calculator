import inquirer from "inquirer";
import chalk from "chalk";
async function title() {
    console.log(chalk.redBright.bold(`------------Lets Start Calculation------------`));
}
title();
async function structure() {
    console.log(chalk.greenBright(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
}
async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Which operation you wanna perform: ",
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            name: 'num1',
            type: 'number',
            message: 'Enter first number: '
        },
        {
            name: 'num2',
            type: 'number',
            message: 'Enter second number: '
        }
    ]);
    if (answer.operation == 'Addition') {
        console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
    }
    else if (answer.operation == 'Subtraction') {
        console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
    }
    else if (answer.operation == 'Multiplication') {
        console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
    }
    else if (answer.operation == 'Division') {
        console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
    }
}
;
async function startAgain() {
    do {
        await structure();
        await askQuestion();
        var again = await inquirer.prompt([
            {
                name: 'restart',
                type: 'input',
                message: 'Would you like to start again . Press Y for yes and N for no .'
            }
        ]);
    } while (again.restart == 'Yes' || again.restart == 'yes' || again.restart == 'Y' || again.restart == 'y');
}
startAgain();
