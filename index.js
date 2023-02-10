import inquirer from "inquirer";
async function main() {
    const questions = [
        {
            type: "input",
            name: "firstPrompt",
            message: "What do you want to do today?",
        },
        {
            type: "confirm",
            name: "secondPrompt",
            message: "Is there anything else u would like to do today?",
        },
    ];
    const firstTodo = await inquirer.prompt(questions.slice(0, 1));
    let moreTodos = await inquirer.prompt(questions.slice(1, 2));
    const allTodos = [firstTodo.firstPrompt];
    let condition = false;
    while (!condition) {
        if (moreTodos.secondPrompt === true) {
            let todos = await inquirer.prompt({
                name: "extraTodos",
                type: "input",
                message: "Todo: "
            });
            allTodos.push(todos.extraTodos);
            moreTodos = await inquirer.prompt(questions.slice(1, 2));
        }
        else {
            condition = true;
        }
    }
    // allTodos.toString();
    console.log(`Your To-do list: ${allTodos}`);
}
await main();
