document.getElementById("name-button").onclick = () => {
    const nameInput = document.getElementById("name"); 
    const nameBox = document.getElementById("name-box");

    if(nameInput && nameBox){
        nameBox.textContent = nameInput.value; 
        nameInput.innerHTML = "";
    } 

}; 

document.getElementById("bio-button").onclick = () => {
    const bioInput = document.getElementById("bio") ; 
    const bioBox = document.getElementById("bio-box") ; 

    if(bioInput && bioBox){
        bioBox.textContent = bioInput.value; 
        bioInput.innerHTML = "";
    }
}