let url ="kodluyoruz.org"
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