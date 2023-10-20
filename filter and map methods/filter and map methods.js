let dizi = [2, 5, 8, 11, 15, 17];
//10'dan büyük olan elemanların 5er katını döndür.
const newArray = dizi.filter(function(number1){
    return number1 > 10;
});
const lastArray = newArray.map(function(number2){
    return number2 *5;
});

document.querySelector("#last_array").innerHTML = lastArray;



// farklı şekilde;
const Array1 = dizi.filter(function(number){
    return number > 10;
}).map(function(number2){
    return number2 *5;
});

console.log(Array1);