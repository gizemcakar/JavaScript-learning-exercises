let formDOM = document.querySelector('#userform')
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event){
    event.preventDefault()  //default gerceklesen islem ne ise o engellendi.
    document.getElementById("scoreText").innerHTML = scoreInputDOM.value
}


let scoreInputDOM = document.querySelector('#score')
localStorage.setItem('score',scoreInputDOM.value) //inputa yazilan her deger score adi altinda locale kaydedilecek.
