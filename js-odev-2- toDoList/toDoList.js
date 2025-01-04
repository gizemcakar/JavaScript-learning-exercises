var input = document.getElementById("input")
input.className = "mb-2"
input.value = "Add something to do"
input.addEventListener("click", setInputBlank);
function setInputBlank(){
    input.value = "";
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    // Cancel the default action, if needed  event.preventDefault();
    document.getElementById("ekle").click();
  }
});

var addingToDo_button = document.getElementById("ekle")
addingToDo_button.addEventListener("click", addingToDo);

function addingToDo(){
    if(input.value.toString().trim() == ""){      //sağında veya solundaki spaces siliniyor.
        document.getElementById("toast-body").innerHTML = "Nothing written to add"
        document.getElementById("toast").classList.add("show");
        // alert("Nothing written to add") //toast olarak yap (bootstrapte vardı ne demek bak.)
    }
    else {
        const div = document.createElement("div");
        div.classList.add("d-flex","justify-content-between","ms-2","mt-1");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        div.appendChild(checkBox);
        const liDOM = document.createElement("li");
        liDOM.innerHTML = input.value;
        liDOM.style.listStyleType ="none";
        content.classList.add("text-center","mx-auto");
        content.style.width ="30%";
        setInputBlank();
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Sil";
        div.appendChild(liDOM);
        div.appendChild(deleteBtn);
        document.getElementById("content").appendChild(div);
        deleteBtn.addEventListener("click", () => {
            div.remove();
            // deleteBtn.remove();
        });
    }
}

