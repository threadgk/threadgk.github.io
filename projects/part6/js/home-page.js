
 const getGallery = async()=> {

 
const url = "https://threadgk.github.io/projects/part6/json/home-display.json"; 

try {
    const response = await fetch(url); 
    return await response.json(); 

} catch (error) {
    console.error("Error fetching gallery images!", error); 

} 

} ; 

                const showSlideShow = async()=>{

                    const gallery = await getGallery(); 
                    const display = document.getElementById("display-gallery") ;  

                         if (!display || !gallery || gallery.length === 0) return; 

                         let index = 0; 
                         const img = document.createElement("img") ; 

                         img.src = gallery[index].img ; 
                         img.classList.add("slideshow-img"); 
                         display.appendChild(img); 



                            setInterval(()=>{
                                index = (index + 1) % gallery.length; 
                                img.src = gallery[index].img; 
                            } , 3000) ; 
                } ; 

                      showSlideShow();