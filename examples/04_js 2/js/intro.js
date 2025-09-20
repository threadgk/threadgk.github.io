/* first way
const sayHello = ()=>{
    console.log("Hello World");
}
document.getElementById("btn-click-me").onclick = sayHello;
*/

/* if you are going to call this function one time */
    document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked"); //currentTarget is the button that was clicked 
}; 

document.getElementById("btn-happy").onclick = (event) =>{
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAYYY!!"
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad")

}

document.getElementById("btn-sad").onclick = (event) =>{
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "BOOOO!!"
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy")
}

document.getElementById("btn-clear").onclick = (event) =>{
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = ""
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => { //on key up is when you press down then release
        const userInput = event.currentTarget.value;
        document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.` // backticks? evaluate the variable
        document.getElementById("img-emotion").classList.remove("hidden");
    };



    /* Counter */   
let counter = 0 ; 
let counterInterval ; 
const countP = document.getElementById("p-count") ;
const btnStartCount = document.getElementById("btn-count-start") ;
const btnPauseCount = document.getElementById("btn-count-pause") ; 
btnPauseCount.disabled = true ; 

    btnStartCount.onclick = () => {
        counterInterval = setInterval(()=>{
            counter++ ;
            countP.innerHTML = counter ;
        } , 1000) ;   /* function as parameter > every 1000 miliseconds  */ 
    }

    btnPauseCount.onclick = () => {
        clearInterval(counterInterval) ; 
        btnPauseCount.disabled = true ; 
        btnPauseCount.disabled = false ; 
    }


    /* Donation Stuff */ 
    const goal = 10000 ;  
    document.getElementById("goal-span").innerHTML = goal ;

    document.getElementById("btn-donations").onclick = () => { 
         const donation = document.getElementById("txt-donation").value ;
         const errorspan = document.getElementById("donation-error") ; 
         errorspan.innerHTML = "" ; 
         const donationMessage = document.getElementById("donation-message") ;

         if(isNaN(donation) || donation <= 0 ) {
               errorspan.innerHTML = " * Invalid Amount " ; 
               return ;
         } 



         const donationPercent = donation / goal * 100 ;  
         if(donationPercent >= 100) {
             donationMessage.innerHTML = "Goal Reached" ;
         } else if (donationPercent >= 50 ) {
             donationMessage.innerHTML = " Over Half Way " ;
         } else {
                donationMessage.innerHTML = " Let's Get Started " ;
         } 






         document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%" ) ; 
    }
