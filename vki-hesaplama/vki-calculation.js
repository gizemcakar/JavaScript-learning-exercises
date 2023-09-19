weight = prompt("Please enter your weight in kg (example:45,8)");
height = prompt("Please enter your height in m (example:1,66)");

let vki = weight/(height*height);

function vkiCalculation(){
    if(vki < 18,5){
    alert("Under ideal weight");
}
else if(vki >= 18,5 && vki <=24,9){
    alert("ideal weight");
}
else if(vki >=25 && vki <=29,9){
    alert("above ideal weight");
}
else if(vki>= 30 && vki<=39,9){
    alert("far above ideal weight (obesity)")
}
else if(vki >=40){
    alert("far above ideal weight (morbid obesity)")
}
}
vkiCalculation();