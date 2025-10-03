class Painting {
    constructor(name, artist, image, framed) {
        this.name = name; 
        this.artist = artist; 
        this.image = image;  
        this.framed = framed;
    } 

    getPainting(){ 
    
        return ` <div class="card"> 
                    <h3> ${this.name} </h3> 
                    <img src="${this.image}" alt="${this.name}"> 
                 </div> 
                `; 
                 
    }
    
}

const paintings = [
    new Painting ("The Persistence of Memory","Salvador Dali","images/POM.jpeg",true) , 
    new Painting ("Survivor","Elizabeth Catlett","images/Survivor.jpg",true) ,
    new Painting ("Prima Ballerina","Edgar Degas","images/PB.jpg",false) , 
    new Painting ("Starry Night","Vincent van Gogh","images/SN.jpg",false) ,
    new Painting ("Lines of Sight","Carmen Herrera","images/LinesofSight.jpg",true) ,

] ;

const gallery = document.getElementById("gallery"); 
paintings.forEach(p => {
    gallery.innerHTML += p.getPainting(); 
}); 

const paintingModal = document.getElementById("modal");
const closeSpan = document.getElementById("close");
const modalTitle = document.getElementById("m-title");
const modalImg = document.getElementById("m-img")
const modalArtist = document.getElementById("m-artist");
  







const paintingImages = document.querySelectorAll("#gallery img") ; 
    paintingImages.forEach((img, index) => {  
    img.onclick = () => {
        const painting = paintings[index] ;    
        paintingModal.style.display = "block" ;  
        modalImg.src = painting.image;  
        modalArtist.textContent = painting.artist; 
        modalTitle.textContent = painting.name; 

const frameStyle = {
    true: "5px solid black", 
    false: "none"
     } ; 
     modalImg.style.border = frameStyle[painting.framed];
}; 

    
    


     
}) ;  

closeSpan.onclick = () => { 
    paintingModal.style.display = "none" ; 
};

card.onclick = () => { 
    if(e.target == paintingModal) {   
        paintingModal.style.display = "none" ;}
};


