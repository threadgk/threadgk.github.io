class Dog{
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed ; 
        this.color = color ; 
        this.age = age ;
        this.size = size ; 
        this.pic = pic ; 
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog"); 

        //header 
        const h3 = document.createElement("h3") ; 
        h3.innerHTML = this.title ; 
        section.append(h3) ;   
        const arrow = document.createElement("a"); 
        arrow.href="#"; 
        arrow.innerHTML = "$#x2964" ; 
        h3.append(arrow);

        //column container   
        const container = document.createElement("div") ;
        container.classList.add("columns");
        section.append(container); 

        // column 1 
        const column1 = document.createElement("div"); 
        container.append(column1); 

        // column 2 
        const column2 = document.createElement("div"); 
        container.append(column2); 

        return section;
    }
        // img  
        picture(filename){
        const img = document.createElement("img") ; 
        img.src = `images/classes/${filename}` ; 
        return img ;  


    }
} 

const dogs = [] ; 
dogs.push(new Dog("Coco","Yorkie","Black","7","small","yorkie.jpg"));
dogs.push(new Dog("Sam","Golden Retriever","Yellow","2","large","golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull","White","5","medium","pitt-bull.jpg"));
 
// on page Load 
 const dogListDiv = document.getElementById("dog-list") ; 

 dogs.forEach((dog)=>{ 
 dogListDiv.append(dog.item);
 });