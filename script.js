let buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', function(event) {calculator(event)});
let result = document.querySelector('.row-result');

let clearBtn = document.querySelector('.button.clear');
let deleteBtn = document.querySelector('.button.delete');
let divideBtn = document.querySelector('.button.divide');
let addBtn = document.querySelector('.button.add');
let multiplyBtn = document.querySelector('.button.multiply');
let subtractBtn = document.querySelector('.button.subtract');
let equalsBtn = document.querySelector('.button.equals');

let operatorClicked = false;
let leftNum = null, rightNum = null;
let operationToDo = null;
let clicked = null;

//86-9-=

function calculator(event){
     clicked = event.target;

    if(!isNaN(clicked.innerText)) // if it's a number
        numberClick(parseInt(clicked.innerText));

    else if(isOperation(clicked)){ // (+ - / *) only not =
        if(!operatorClicked){
            leftNum = parseInt(result.innerText);
            result.innerText = leftNum;
            operatorClicked = true;
        }
        
    }
    else if(clicked === equalsBtn){
        if(!operatorClicked){
            rightNum = parseInt(result.innerText);
            calculate(leftNum,rightNum,operationToDo);
            operatorClicked = false;

        }
    }
    else if(clicked === clearBtn){
        result.innerText = "0";
        leftNum =  rightNum = operationToDo = null;
        operatorClicked = false;
    }
    else if(clicked === deleteBtn)
        deleteButton();
    
        
}

function deleteButton(){
    if (Math.abs(parseInt(result.innerText)) < 10)
        result.innerText = "0";
    else
        result.innerText = result.innerText.slice(0, -1);
    operatorClicked = false;
    
}

function numberClick(num){
    if(operatorClicked){
        result.innerText = num;
        operatorClicked = false;
    }
    else{
        if (parseInt(result.innerText) === 0)
            result.innerText = num;
        else
            result.innerText += num;
        
    }

    
}

function isOperation(clickedBtn){
    if(leftNum && operationToDo){
        calculate(leftNum,parseInt(result.innerText),operationToDo);
    }
    if (clickedBtn === addBtn) 
    {
        operationToDo = 'add';
        return true;
    }
    else if (clickedBtn === subtractBtn) 
    {
        operationToDo = 'subtract';
        return true;
    }
    else if (clickedBtn === divideBtn) 
    {
        operationToDo = 'divide';
        return true;
    }
    else if (clickedBtn === multiplyBtn) 
    {
        operationToDo = 'multiply';
        return true;
    }
    else 
        return false;
}

function calculate(num1,num2,operationToDo){
    if(operationToDo === 'add'){
        result.innerText = num1 + num2;
    }
    else if (operationToDo === 'subtract'){
        result.innerText = num1 - num2;
    }
    else if(operationToDo === 'divide'){
        result.innerText = Math.floor(num1 / num2);
    }
    else if(operationToDo === 'multiply'){
        result.innerText = num1 * num2;
    }    
    
}
