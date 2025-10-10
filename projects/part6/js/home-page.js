
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
        const slideShow = document.querySelector("#slideshow") ;  

        images.forEach((image) => { 

            const img = document.createElement("img"); 
            img.src = img.img ; 
            img.classList.add("hidden"); 

            slideShow.appendChild(img) ; 
}) ; 
                const setInterval=()=> {

                    const currentSlide = document.querySelector("#slideshow :not(.hidden)"); 
                    let nextSlide = currentSlide.nextElementSibling; 

                     if(!nextSlide){
                        nextSlide = document.querySelector("#slideshow :first-child"); 
                     } 

                     currentSlide.classList.add("hidden"); 
                     nextSlide.classList.remove("hidden");
                  } , 10000) ; 
                };
                      showSlideShow();