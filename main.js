let fbCreated = document.getElementById("fb")
let sbCreated = document.getElementById("sb")
let tbCreated = document.getElementById("tb")
let text = document.querySelector("h1")
let textContainer = document.getElementById("textContainer")
let divBackground = document.getElementById("resume")
let divDisplay = document.querySelector(".resume")
function Created(){
    divDisplay.style.display = "block"
}
function ChangeBG(){
    divBackground.style.background = "darkgrey"
}
function ChangeTextColor(){
    textContainer.style.color = "red"
}
fbCreated.addEventListener("click", Created)
sbCreated.addEventListener("click", ChangeBG)
tbCreated.addEventListener("click", ChangeTextColor)




