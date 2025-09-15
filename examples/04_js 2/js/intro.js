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
