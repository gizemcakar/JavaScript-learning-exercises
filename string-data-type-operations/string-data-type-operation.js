let url ="www.kodluyoruz.org"
let language ="Java"

// Java yerine JavaScript yazdırmak için yapılabilecek işlemler:

console.log(language+"Script")                          // + ile eklenerek konsolda yazdirildi.


language = language.replace("Java","JavaScript") 
console.log(language)                                   // replace islemi kullanilarak degistirildi.


let language1 ="Java"
let addiction = "Script" 
console.log(language1.concat(addiction))                 // concat ile iki stringi birlestirerek yapildi.

let language2 ="Java"
language2 += "Script" 
console.log(language2) 

document.body.innerHTML += language + " " + language2;


// Büyük harfle baslayan hale getirmek:

let language3 = "javascript"
language3 = language3[0].toUpperCase() + 
            language3.slice(1,4).toLowerCase() + 
            language3[4].toUpperCase() + 
            language3.slice(5,10).toLowerCase() ; 
console.log(language3)

document.body.innerHTML += " " + language3;


// url degiskeninden www cıkarıp bunu yeni bir degisken tanımlamak:

url = url.slice(url.indexOf(".")+1);
document.body.innerHTML += " " + url;

let domainName = url.slice(0 , url.indexOf("."));
document.body.innerHTML += " " + domainName ;