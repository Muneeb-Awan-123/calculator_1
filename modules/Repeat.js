import inquirer from "inquirer";
async function Repeat() {
    return await inquirer.prompt([{
            type: 'rawlist',
            name: "repeat",
            message: "Want to do more Operation:",
            choices: [
                'Yes',
                'No',
                'History'
            ]
        }]);
}
export default Repeat;
