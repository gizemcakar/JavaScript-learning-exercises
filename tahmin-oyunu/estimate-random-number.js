var randomNumber = Math.floor(Math.random()*10); // 0'a eşit veya büyük ve 1'den küçük sayılar için,0'dan 9'a kadar rastgele bir tamsayı döndürür
var estimation = prompt("Bir sayi girerek rastgele sayiyi bulmaya calis!");

function estimateNumber() {
if(estimation == randomNumber){
    alert("Great! You did!");
}
else if(estimation == " "){
    alert("Ooops! Please enter a number");
}
else if(estimation == null){
    alert("You gave up to enter a number");
}
else{
    alert("Try again :( random number: " + randomNumber);
}
}
estimateNumber();