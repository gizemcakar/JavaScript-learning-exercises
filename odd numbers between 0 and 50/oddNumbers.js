// 0 ve 50 arasında tek sayılar:

function oddNumbers(){
    for(i=0; i<50; i++){
        if(i == 1){
            document.getElementById("numbers").innerHTML = i;
        }

        else if(i%2 == 1){
            document.getElementById("numbers").innerHTML += ", " + i ;
        }
    }
}
oddNumbers();
