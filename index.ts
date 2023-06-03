#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from 'figlet';
import Result from "./modules/Result.js";
import Welcome from "./modules/Welcome.js";
import Repeat from "./modules/Repeat.js";
import Repeat1 from "./repeat1.js"
import { createSpinner } from 'nanospinner'
import End from "./modules/End.js";

await Welcome();

let repeat= true;
let history=[];

while(repeat){
let answers = await inquirer.prompt([{
    name: "firstValue",
    type: "number",
    message: "Enter first value:"},
    {
        type: 'rawlist',
        name: 'operation',
        message: '',
        choices: [
          '+',
          '-',
          'X',
          '/',
          '^'
        ]
      },
    {
        name: "secondValue",
        type: "number",
        message: "Enter second value:"}
]);

  let total = Result(answers.firstValue,answers.secondValue,answers.operation);
  console.log(total); 
  history.push(`${answers.firstValue} ${answers.operation} ${answers.secondValue} = ${total}`)
  
var rep = await Repeat();

    if(rep.repeat === "No"){
      repeat= false;
    }
    if(rep.repeat ==="History"){
      let hist = await inquirer.prompt([{
        type: 'rawlist',
        name: "history",
        message: "",
        choices: [
          'Show',
          'Clear'
        ]}]);
    if(hist.history === "Show"){
      history.forEach(x => console.log(x));
      rep = await Repeat1();
      if(rep.repeat === "No"){
        repeat= false;
      }
    }
    if(hist.history === "Clear"){
      history.length=0;
      rep = await Repeat1();
      if(rep.repeat === "No"){
        repeat= false;
      }
    }
    }
}
if(repeat === false){
  End();
}