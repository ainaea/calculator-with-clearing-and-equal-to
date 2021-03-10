//replacing id getter function
function pickerById(entrying) {
    return document.getElementById(entrying);
}

//Number values
const txtResult = pickerById('txtResult'); //For operation  output
const txtNum1 = pickerById('txtNum1'); //First value
const txtNum2 = pickerById('txtNum2'); //Second output

//Operator values
const btnSum = pickerById('btnSum');
const btnMinus = pickerById('btnMinus');
const btnMultiply = pickerById('btnMultiply');
const btnDivide = pickerById('btnDivide');
const btnModulo = pickerById('btnModulo');
const btnClr = pickerById('btnClr');
const btnEqual = pickerById('btnEqual');

//Bind to event listener
var operator;
btnSum.addEventListener('click', ()=>operator = '+');
btnMinus.addEventListener('click', ()=>operator = '-');
btnMultiply.addEventListener('click', ()=>operator = '*');
btnDivide.addEventListener('click', ()=>operator = '/');
btnModulo.addEventListener('click', ()=>operator = '%');
btnClr.addEventListener('click', ()=>{txtResult.value = ""; txtNum1.value = "";    txtNum2.value = '' });
btnEqual.addEventListener('click', calculate);
//replacing arithemic functions

function evaluate(a,b ,c) {
    var result;
    switch (true) {
        case c == '+':
            result = a + b;
            break;
        case c == '-':
            result = a - b;
            break;
        case c == '*':
            result = a * b;
            break;
        case c == '/':
            b == 0 ? result = "Cannot divide by zero" :result = a / b;;
            
            break;
        case c == '%':
            b == 0 ? result = "Cannot modulo by zero" :result = a % b;;
            
            break;    
    
        default:
            break;
    }
    return result;
}

// function sum(a,b) {
//     return a + b;
// }
// function minus(a,b) {
//     return a - b;
// }
// function multiply(a,b) {
//     return a * b;
// }
// function divide(a,b) {
//     return b!= 0? a / b: "Cannot divide by zero";
// }

// function modulo(a,b) {
//     return b!= 0? a % b: "Cannot modulo by zero";
// }

//Creating a function
function calculate() {
    let num1 = parseInt(txtNum1.value);
    let num2 = parseInt(txtNum2.value);
    txtResult.value = evaluate(num1,num2, operator);
    //Getting the event target values of element clicked on
    // let sign = event.target.value;
    // console.log(sign);
    // if (sign == "+"){txtResult.value = evaluate(num1,num2, oper)}
    // else if (sign == "-"){txtResult.value = minus(num1,num2)}
    // else if (sign == "*"){txtResult.value = multiply(num1,num2)}
    // else if (sign == "/"){txtResult.value = divide(num1,num2)
    //     // if(num2 == 0){txtResult.value = "Cannot divide by zero"}
    //     // else{txtResult.value = num1/num2}
    //     }
    // else{  txtResult.value = modulo(num1,num2)
        // if(num2 == 0){txtResult.value = "Cannot modulo by zero"}
        // else{txtResult.value = num1 %  num2}
    //}    
}

// function getElement (elementId){
//     return document.getElementById(elementId);
// }