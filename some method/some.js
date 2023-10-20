let array = [3, 6, 9, 14, 16];
let array2 =[63, 66, 2];

function myFunction(inputArray){   
    let result1 = inputArray.some(function(number1){
        return number1 > 5;
    });
    let result2 = inputArray.some(function(number2){
        return number2 < 5;
    });
    if(result1 == true){
        document.getElementById("result").innerHTML += "5'ten büyük eleman mevcut."
     }
     if(result2 == true){
        document.getElementById("result").innerHTML += "5'ten küçük eleman mevcut."
    }
}

myFunction(array);
myFunction(array2);



/*
for(let i=0; i<array.length ; i++){
    if(array[i]>5){
        document.getElementById("result").innerHTML += "5'ten büyük eleman mevcut."
    }
    else if(array[i]<5){
        document.getElementById("result").innerHTML += "5'ten küçük eleman mevcut."
    }
}
*/