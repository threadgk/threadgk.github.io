
const loadUser = async()=> {
        try{
            const url = "https://threadgk.github.io/projects/part6/json/users.json" ; 

            const response = await fetch(url) ; 
            const users = await response.json(); 
            const user = users[0]; 

            document.getElementById("name-box").textContent = user._username ;
            document.getElementById("bio-box").textContent = user._reviwes ; 
            document.getElementById("profile-pic").src = user["profile-picture"] ;
        } catch (error) {
            console.error(" Error fetching users!", error) ;
        } 

}
// profile name 
document.getElementById("name-button").onclick = () => {
    const nameInput = document.getElementById("name"); 
    const nameBox = document.getElementById("name-box");

    if(nameInput && nameBox){
        nameBox.textContent = nameInput.value; 
        nameInput.innerHTML = "";
    } 

}; 
// profile bio 
document.getElementById("bio-button").onclick = () => {
    const bioInput = document.getElementById("bio") ; 
    const bioBox = document.getElementById("bio-box") ; 

    if(bioInput && bioBox){
        bioBox.textContent = bioInput.value; 
        bioInput.innerHTML = "";
    }
}