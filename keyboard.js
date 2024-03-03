let butten=document.querySelectorAll(".keys input");
let area=document.getElementById("area");
let spacebtn=document.getElementById("sp");

butten.forEach((button)=> {
    button.addEventListener("click", () => {
        area.textContent += button.value;
    })
});

spacebtn.addEventListener("click", () => {
    area.textContent += " ";
})