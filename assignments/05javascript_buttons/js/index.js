document.getElementById("color-picker").addEventListener("input", function(){
    output = document.getElementById("color-output");
    output.textContent = "Selected color: " +this.value;
    output.style.color= this.value;
});

document.getElementById("become-sunny").addEventListener("click", function(){
     img = document.getElementById("sunny-img");
     img.src = "images/sun.webp"

}); 

document.getElementById("become-cloudy").addEventListener("click",function(){
    img = document.getElementById("sunny-img");
    img.src = "images/rain-cloud.jpg"
});

