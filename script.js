
const container = document.querySelector(".container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");




createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p"); 
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentditable","true");
    img.src = "delete-icon.jpg";
    img.style.width="40px";
    img.style.marginLeft = "90%";
    img.style.marginTop = "90px";
    
    container.appendChild(inputBox).appendChild(img);
});

container.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
       
    }
    
})

