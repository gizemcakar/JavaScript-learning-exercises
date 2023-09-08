let btnStyleString = "styling-button";
function clicked(){
    let btnStyling = document.getElementById(btnStyleString);
    btnStyling.style.fontSize = "50px";
    btnStyling.style.color ="red";
    btnStyling.style.fontWeight ="bolder";
    document.getElementById("paragraph").style.color ="red";
}

// F2 ile aynı değişkenin ismi geçtiği her yerde değiştirilir bir kerede.