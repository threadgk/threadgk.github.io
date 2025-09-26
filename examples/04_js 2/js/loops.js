document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);  //placing inside section

    // loop and write number 1-10
    for(let i=0; i<10; i++){ // look up for loops later & other basics 
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)` ;
        ul.append(li); //placing li inside the ul 
   
    }
};


document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = ""; // only show error if needed 

    const startNum = parseINT(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum)
    {
        error.innerHTML = " second number must be bigger than first " ;
        return;
    }

 