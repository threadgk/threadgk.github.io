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
    new Painting ("Prima Ballerina","Edgar Degas","images/PB.j