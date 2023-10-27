let array1 = [2, 3, 4];

array1.forEach(myFunction); // array1'in her bir item'ına myFunction'da verilen islemi uygula demek.

function myFunction(item, index, arr){    // myFunction tanımlandı ve item: elemanın kendisi, index:sırası(indeksi),
    arr[index] = item*10                  // arr:arrayin kendisi
}



document.getElementById("result").innerHTML = array1; //html elementine array1'in eachte fonk uygulanan hali eşitlendi.


