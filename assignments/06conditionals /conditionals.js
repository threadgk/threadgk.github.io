




const slider = document.getElementById("days"); 
const message = document.getElementById("message"); 
const plantimg = document.getElementById("plant") ;
slider.oninput = (event) => {
                    const days = event.currentTarget.value; 

                    if (days >= 1 && days <= 2) {
                        message.innerHTML = "Its been "+days+" day(s) since watering your plant. Your plant is happy!!!!!" ;  
                        plantimg.src = "images/plant-happy.jpeg" ;
                    } else if (days >= 3 && days <= 5 ) {
                        message.innerHTML = "Its been "+days+" day(s) since watering your plant. Your plant is getting  a little thirsty." ;  
                        plantimg.src = "images/plant-thirsty.jpeg" ;
                    } else if ( days >= 6 && days <= 9 ){
                        message.innerHTML = "Its been "+days+" day(s) since watering your plant. Your plant needs watering soon!" ;  
                        plantimg.src = "images/plant-sad.jpeg" ;
                    } else  {
                        message.innerHTML = "Its been "+days+" day(s) since watering your plant. Your plant is very thirsty! Needs Water NOW!!" ;  
                        plantimg.src = "images/plant-very-thirsty.jpeg" ;
                    }
}  ;






const clockP = document.getElementById("clock") ; 

 const updateClock = () => {
    const now = new Date(); 

    let hours = now.getHours();
    let minutes = now.getMinutes(); 
    let ampm = "am"; 



     if( hours >= 12 ) {
         ampm = "am"; 
         if( hours >12 )
            hours -= 12 ;  
            ampm = "pm" ;
     } 
     
     if( hours === 0) {
        hours = 12 ;
     } 

     if ( minutes < 10) {
        minutes = "0" + minutes ; 
     }

     clockP.innerHTML = `${hours}:${minutes} ${ampm}` ; 
 }           ; 
                    setInterval(updateClock,1000) ; 
                    updateClock() ;  






const btnEx1 = document.getElementById("exercise1") ; 
const btnEx2 = document.getElementById("exercise2") ; 
const planting = document.getElementById("ex1") ;
const clockDiv = document.getElementById("ex2") ;  
 
planting.style.display = "block";   
clockDiv.style.display = "none" ; 

btnEx1.onclick = () => {
     planting.style.display = "block"; 
     clockDiv.style.display = "none" ; 
}  

btnEx2.onclick = () => {
     planting.style.display = "none"; 
     clockDiv.style.display = "block" ; 
}






const toggleBtn = document.getElementById("toggle-btn") ; 
const navItems = document.getElementById("flex-nav") ; 
const arrow = document.getElementById("nav-arrow") ; 


toggleBtn.onclick = () => {
    
       if (navItems.classList.contains("hide-small") ) { 
           navItems.classList.remove("hide-small") ;  
           arrow.textContent = "▲"     ;     
        }  else { 
            navItems.classList.add("hide-small") ;  
            arrow.innerHTML = "▼" ;
        }
} ;



