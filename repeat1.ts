import inquirer from "inquirer";

async function SimpleRepeat(){
    return await inquirer.prompt([{
        type: 'rawlist',
        name: "repeat",
        message: "Want to do more Operation:",
        choices: [
          'Yes',
          'No'
        ]}]);
}

export default SimpleRepeat;