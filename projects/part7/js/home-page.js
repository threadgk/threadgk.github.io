
 const getImages = async()=> { 
     const url = "https://threadgk.github.io/projects/part6/json/home-display.json"; 
     try {
        const response = await fetch(url); 
        return await response.json(); 
        } catch (error) {
            console.error("Error fetching gallery images!", error); 
        } 
}; 
        const showSlideShow = async()=>{
                const images = await getImages(); 
                const displayGallery = document.querySelector("display-gallery"); 
                
                images.forEach((image)=> {
                    const card = document.createElement("div"); 
                    card.classList.add("image-card"); 

                    const pic = document.createElement("img"); 
                    pic.src = image.img;  

                    card.append(pic); 
                    displayGallery.append(card);
                }); 
            }; 
            showSlideShow();
