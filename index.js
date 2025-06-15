// Faulty calculator using js

// take 2 num as a input 
// performs opraiton 10% wrong of the time 
// perform wrong operation on them
// + = -
// * = +
// - = /
// / = **

let num1 = 10;
let num2 = 5;

function faultyCalculator(num1, num2, operator) {
    const randomnum = Math.random();
    let result;
    if(randomnum < 0.1){
        switch(operator){
            case '+':
                result = num1 - num2;
                break;
            case '-':
                result = num1 / num2;
                break;
            case '*':
                result = num1 + num2;
                break;
            case  '/':
                result = num1 ** num2;
                break;
            default:
                console.log("Invalid operator");
        }   
    }
    else{
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.log("invalid operator.");
            }
        }
        console.log(" the value of "+ num1 + " " + operator + " " + num2 + " is : " + result);
    }

faultyCalculator(num1 , num2 , "+");


//  other ways 

 console.log (" faulrty calculator");
let result;
if (Math.random() < 0.10){
    function sum(num1,num2){
        return num1-num2;
    }
    function sub(num1,num2){
        return num1/num2;
    }
    function mul(num1,num2){
        return num1+num2;
    }
    function div(num1,num2){
        return num1**num2;
    }
}
else {
    function sum(num1,num2){
        return num1+num2;
    }
    function sub(num1,num2){
        return num1-num2;
    }
    function mul(num1,num2){
        return num1*num2;
    }
    function div(num1,num2){
        return num1/num2;
    }   
}
let c = sum(4,5);
let d = sub(4,5);
let e = mul(4,5);
let f = div(4,5);
result = sum(4,5) + " " + sub(4,5) + " " + mul(4,5) + " " + div(4,5);
console.log(" answer is : " + result);
