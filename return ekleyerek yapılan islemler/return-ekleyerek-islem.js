function daireAlani(r,PI=3.14){
    return PI*r*r;
}

function alanlarCarpimi(alan1,alan2){
    return alan1*alan2;
}

var a1= daireAlani(5);
var a2= daireAlani(6);

var sonuc = alanlarCarpimi(a1,a2);
console.log(sonuc);

document.getElementById("sonuc").innerHTML = sonuc;