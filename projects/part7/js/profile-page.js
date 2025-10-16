
const loadUser = async()=> {
        try{
            const url = "https://threadgk.github.io/projects/part6/json/users.json" ; 

            const response = await fetch(url) ; 
            const users = await response.json(); 
            const user = users[0]; 

            document.getElementById("name-box").textContent = user._username ;
            document.getElementById("bio-box").textContent = user._reviwes ; 
            document.getElementById("profile-pic").src = user["profile-picture"] ; 


            const savedName = localStorage.getItem("profile_name");
            const savedBio = localStorage.getItem("profile_bio"); 

            if (savedName) document.getElementById("name-box").textContent = savedName;
            if (savedBio) document.getElementById("bio-box").textContent = savedBio; 

        } catch (error) {
            console.error(" Error fetching users!", error) ;
        } 
}
    document.addEventListener("DOMContentLoaded", () => { 
        loadUser(); 
        
        const nameBtn = document.getElementById("name-button"); 
        const bioBtn = document.getElementById("bio-button"); 

        nameBtn.onclick=()=>{ 
            const name = document.getElementById("name").value;  

            if(name){
                document.getElementById("name-box").textContent = name; 
                localStorage.setItem("profile_name", name);
            }
         };
        bioBtn.onclick=()=>{
            const bio = document.getElementById("bio").value;
            if (bio) {
                document.getElementById("bio-box").textContent = bio; 
                localStorage.setItem("profile_bio", bio);
             }
         };
}); 
        