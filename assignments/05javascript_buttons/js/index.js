document.getElementById("color-picker").addEventListener("input",(event)=>{
    const output = document.getElementById("color-output");
    const color = event.currentTarget.value;
    output.textContent = `Selected color: ${color};`
    output.style.color= color;
});

document.getElementById("become-sunny").onclick = (event) =>{
     const img = document.getElementById("sunny-img"); 
     img.src = "images/sun.webp"

}; 

document.getElementById("become-cloudy").onclick = (event) =>{
     const img = document.getElementById("sunny-img");
     img.src = "images/rain-cloud.jpg"
};

