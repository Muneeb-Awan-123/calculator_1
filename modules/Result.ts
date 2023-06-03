import Addition from "./Addition.js";
import Division from "./Division.js";
import Multiplication from "./Multiplication.js";
import Power from "./Power.js";
import Subtraction from "./Subtraction.js";

function Result(num1:number, num2:number, operation:string){
    let result = 0;

    switch(operation){
        case "+":
            result= Addition(num1,num2);
            break;
        case "-":
            result= Subtraction(num1,num2);
            break;
        case "X":
            result = Multiplication(num1,num2);
            break;
        case "/":
            result=  Division(num1,num2);
            break;
        case "^":
            result=  Power(num1,num2);
            break;
    }
    
    return result;
}

export default Result;