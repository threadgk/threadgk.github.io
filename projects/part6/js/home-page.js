
 const getImages = async()=> { 
     const url = "https://threadgk.github.io/projects/part6/json/home-display.json"; 
     try {
        const response = await fetch(url); 
        const data = await response.json(); 
        return data;

        } catch (error) {
            console.error("Error fetching gallery images!", error); 
            return[];
        } 
}; 
        const showSlideShow = async()=>{
                const images = await getImages(); 

                if (!Array.isArray(images) || images.length == 0) {
                    console.error(" No images displaying!") ; 
                    return ;
                }

        const slideShow = document.querySelector("#slideshow") ;   

        images.forEach((item,index) => {

            const imgUrl = Object.values(item)[0]; 

            const img = document.createElement("img") ; 
            img.src = imgUrl;
            img.classList.add("slide"); 

            if(index !== 0 ) img.classList.add("hidden"); 
            
            
            slideShow.appendChild(img) ; 
        }) ; 
        
            setInterval=(()=> {

                    const currentSlide = document.querySelector("#slideshow :not(.hidden)"); 
                    let nextSlide = currentSlide.nextElementSibling; 

                     if(!nextSlide){
                        nextSlide = document.querySelector("#slideshow :first-child"); 
                     } 

                     currentSlide.classList.add("hidden"); 
                     nextSlide.classList.remove("hidden");
                  }, 10000) ; 
                 
                    };    
             
                
                showSlideShow();