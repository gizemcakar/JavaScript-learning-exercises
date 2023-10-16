var myInput = document.createElement("input")

myInput.setAttribute("id","inputumuz")
myInput.setAttribute("type","text")
myInput.setAttribute("value","buraya yazın")

var myDiv = document.createElement("div") //html içerisine input'u yerlestirmek icin
myDiv.appendChild(myInput) //input'u div icine almak icin

var inputDeger = document.getElementById("inputumuz").value  //input degerini almak icin

window.alert(inputDeger)

// calisması icin html sayfasina baglanmalidir.