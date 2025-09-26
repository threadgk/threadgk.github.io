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

    //loop for every number from start to end and display the number in paragraphs 

    for(let i=startNum; i<= endNum; i++){
        const p = document.createElement.p;
        p.innerHTML=i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked Number ${p}`);
        }
    }
};


document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = ""; 

    const toys = ["ball","skipping rope","doll","mini car","elmo"];
    /* first way to iterate 

    for(let i=0; i<toys.length; i++){
        const li = document.createElement("li");
        li.innerHTML= toys[i];
        toys[i]= toyList.append(li);
    }*/

        /* second way */
        toys.forEach((toy, i)=>{
            console.log(i+"."+toy);

            const li= document.createElement("li");
            li.innerHTML = toy;
            toyList.append(li);
        }); 
}

document.getElementById("btn-show-toy-prices").onclick = () => {

    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54; 

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = ""; 

    const priceP = document.createElement("p");
    priceP.innerHTML = "";

    for(let toy in toys){
        const p = document.createElement("p");
        p.innerHTML= toy;
        toyDiv.append(p);

        // when i click the paragraph ..... in a div below show the price 
        // like "Ball costs $..." 
    priceP.onclick = () => {
    priceP.inneraHTML = `${toy} costs $${toys[toy]}.`
    }

}
}