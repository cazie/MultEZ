

function getValues(){

let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;
let skipByValue = document.getElementById("skipByValue").value;

skipByValue = parseInt(skipByValue);
startValue = parseInt(startValue);
endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue) && Number.isInteger(skipByValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayResult(numbers, skipByValue);
    }
    else
    {
    alert("You must enter a number");
    }   
}

function generateNumbers(sValue, eValue){
let numbers = [];
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
}
return numbers;
}

function displayResult(numbers, skipByValue){
    let templateRows = "";
    let printResult = ";"
    
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        
        if (number % skipByValue == 0) {
            className = "num-result";
            templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        }
        printResult = `Multiples of ${skipByValue} for range: ${startValue.value} to ${endValue.value}`
    }
    document.getElementById("results").innerHTML = templateRows;
    document.getElementById("print-result").innerHTML = printResult;

}