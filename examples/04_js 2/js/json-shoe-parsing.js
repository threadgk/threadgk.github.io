
// Asynchronously got shoes from json  

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    try{
        const response = await fetch(url); // HAS to be async function to await -wait to do the next function once you have fetched the data from the url 
        return response.json(); 
    }catch(error){
        console.log("Sorry"); 
    }

};  
const showShoes = async() => {
    const shoes = await getShoes();  
    const shoeListDiv = document.getElementById("shoe-list"); 
    const shoeSection = document.createElement("section"); 


    shoes.forEach((shoe)=>{   

     // make a section for each shoes put all the data in, 
     // then append it to the shoe list

         const p = document.createElement("p"); 
         shoeSection.append(p); 
         p.innerHTML = `Brand: ${shoe.brand}`; 

         const ul = document.createElement("ul"); 
         shoeSection.append(ul); 

         shoe.reviews.forEach((review) => {
            const review = document.createElement("li"); 
            ul.append(review); 
            review.innerHTML = `Review: ${shoe.reviews}`;
            

         }); 

         shoeListDiv.append(shoeSection);
    });
};
 showShoes(); 

