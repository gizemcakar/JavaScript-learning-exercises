function returnFive(){   
    console.log("working...");
    let x = 3;
    x += 5;
    console.log("x: " + x);
    // return 5;
    // document.getElementById('output').innerHTML = 'TEST';

    return 5;
}

// document.getElementById('output').innerHTML = returnFive();
// let five = returnFive();

// let outputHtmlElement = document.getElementById('output');
// outputHtmlElement.innerHTML = 'TEST';

function calculateSumAndPrintResultToScreen(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    let outputHtmlElement = document.getElementById('output');
    outputHtmlElement.innerHTML = firstNumber + " + " + secondNumber + " = " + result;
}

calculateSumAndPrintResultToScreen(5, 7);

function calculateSum(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}

let sumResult = calculateSum(3, 2);
// document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + sumResult;
document.getElementById('output').innerHTML += "<br>" + sumResult;

