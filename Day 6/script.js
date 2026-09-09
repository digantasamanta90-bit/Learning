const button = document.getElementById("button");
button.addEventListener("click", () => {
    console.log("Button clicked");
    button.innerHTML = "Downloaded!!!"
    
    button.style.marginTop = "10px";
    button.style.background = "rgb(124, 168, 57)"
    button.style.border = "none"
    button.style.height = "20px"
    button.style.width = "80px"
    button.style.fontSize = "10px"
    button.style.color = "antiquewhite"
    button.style.borderBottomLeftRadius = "7px"
    button.style.borderBottomRightRadius = "7px"
    button.style.borderTopLeftRadius = "7px"
    button.style.borderTopRightRadius = "7px"
}); 



