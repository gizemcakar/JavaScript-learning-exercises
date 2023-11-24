const menu = [
    {
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "imageOfFoods/tteokbokki.jpg",
        desc: "Spicy rice cakes, serving with fish cake." ,
    }, 
    {
        title: "Chicken Ramen" ,
        category: "Japan",
        price: 7.99 ,
        img: "imageOfFoods/chicken-ramen.jpg",
        desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. ",   
    }, 
    {
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "imageOfFoods/bibimbap.jpg",
        desc: "Boiling vegetables, serving with special hot sauce ",
    }, 
    {
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "imageOfFoods/Dan-Dan-Mian.jpg",
        desc: "Dan dan noodle, serving with green onion ",
    }, 
    {
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "imageOfFoods/Yangzhou.jpg",
        desc: "Yangzhou style fried rice, serving with bean and pickles",
    }, 
    {
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "imageOfFoods/Onigiri.jpg",
        desc: "Rice Sandwich, serving with soy sauce"
    }, 
    {
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "imageOfFoods/Jajangmyeon.jpg",
        desc: "Black bean sauce noodle, serving with green onion"
    }, 
    {
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "imageOfFoods/Ma-yi-shang-su.jpg" ,
        desc: "Hot pepper sauce noodle, serving with soy bean and onion",
    }, 
    {
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "imageOfFoods/Dorayaki.jpg",
        desc: "Red bean paste dessert, serving with honey. ",
    }
];

    let allButtons = document.createElement("div");
    document.getElementById("buttons").appendChild(allButtons);
    allButtons.classList.add("text-center", "btn-container");

    let allButton = document.createElement("button");
    allButton.classList.add("me-3","btn","btn-outline-dark","btn-item");
    allButton.innerHTML = "All";
    allButton.addEventListener("click", clickAllButton);
    function clickAllButton(){
        createMenu(menu);
        deleteActiveClass();
        allButton.classList.add("active");

    }
    allButtons.append(allButton);

    let koreaButton = document.createElement("button");
    koreaButton.classList.add("me-3","btn","btn-outline-dark","btn-item");
    koreaButton.innerHTML = "Korea";
    koreaButton.addEventListener("click", clickKoreaButton);
    function clickKoreaButton(){
        let menuKorea = menu.filter(menuItem => menuItem.category === "Korea")
        createMenu(menuKorea);
        deleteActiveClass();
        koreaButton.classList.add("active");    
    }
    allButtons.appendChild(koreaButton);

    let japanButton = document.createElement("button");
    japanButton.classList.add("me-3","btn","btn-outline-dark","btn-item");
    japanButton.innerHTML = "Japan";
    japanButton.addEventListener("click", clickJapanButton);
    function clickJapanButton(){
        let menuJapan = menu.filter(menuItem => menuItem.category === "Japan")
        createMenu(menuJapan);
        deleteActiveClass();
        japanButton.classList.add("active");
    }
    allButtons.appendChild(japanButton);

    let chinaButton = document.createElement("button");
    chinaButton.classList.add("me-3","btn","btn-outline-dark","btn-item");
    chinaButton.innerHTML = "China";
    chinaButton.addEventListener("click", clickChinaButton);
    function clickChinaButton(){
        let menuChina = menu.filter(menuItem => menuItem.category === "China")
        createMenu(menuChina);
        deleteActiveClass();
        chinaButton.classList.add("active");
    }
    allButtons.appendChild(chinaButton);



    function createMenu(newMenu){
        document.getElementById("container").innerHTML = "";
        //document.getElementById("container").classList.add("overflow-auto");
        for(i=0; i< newMenu.length; i++){
            let foodP1 = newMenu[i].title;
            let foodP2 = newMenu[i].category;
            let foodP3 = newMenu[i].price;
            let foodP4 = newMenu[i].img;
            let foodP5 = newMenu[i].desc;
    
            let foodContent = document.createElement("div");
            foodContent.classList.add("d-inline-flex","col-5","me-3","ms-3","pb-4");
            document.getElementById("container").appendChild(foodContent);
            document.getElementById("container").style.fontFamily = "Zilla Slab, serif";
    
            let imageOfFood = document.createElement("img");
            imageOfFood.src = foodP4;
            imageOfFood.style.width = "123px";
            imageOfFood.style.height= "175px";
            imageOfFood.style.border = "4px solid";
            imageOfFood.classList.add("d-flex", "object-fit-cover", "rounded","col-2")
            foodContent.appendChild(imageOfFood);
    
           
            let descriptionOfFood = document.createElement("div");
            descriptionOfFood.classList.add("col-10","ps-2","pe-3");
    
            let titleAndPrice = document.createElement("div");
            let title = document.createElement("h4");
            title.innerHTML = foodP1;
            title.classList.add("fw-medium","mb-0");
            titleAndPrice.appendChild(title);
            let price = document.createElement("h4");
            price.innerHTML = foodP3;
            price.classList.add("fw-medium","mb-0");
            titleAndPrice.style.color = "#e00a00";
            titleAndPrice.classList.add("d-inline-flex","justify-content-between","w-100","px-2");
            titleAndPrice.appendChild(price);
            descriptionOfFood.appendChild(titleAndPrice);
    
            let underline = document.createElement("hr");
            underline.classList.add("opacity-100", "d-flex", "mx-2", "mt-2", "mb-3");
            descriptionOfFood.appendChild(underline);
            
    
            let text = document.createElement("p");
            text.innerHTML = foodP5;
            text.classList.add("ps-2");
            descriptionOfFood.appendChild(text);
            foodContent.appendChild(descriptionOfFood);
        }
    }
    createMenu(menu);
    
function deleteActiveClass (){
    allButton.classList.remove("active");
    koreaButton.classList.remove("active");
    japanButton.classList.remove("active");
    chinaButton.classList.remove("active");
}


