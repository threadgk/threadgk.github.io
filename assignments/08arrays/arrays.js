// Before Images  Array 
const before = {
    "Jerry": "images/before1.webp",
    "Callie": "images/before2.webp",
    "Marty": "images/before3.webp",
    "Toby": "images/before4.webp", 
};
// After Images  Array
const after = {
    "Jerry": "images/after1.webp",
    "Callie": "images/after2.webp",
    "Marty": "images/after3.webp",
    "Toby": "images/after4.webp",
};

// Gallery 
const gallery = document.getElementById("dog-gallery");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close"); 

// holds img and captions 
for (let dog in before ) {
    const box = document.createElement("div"); 
    box.classList.add("box"); 

// img  
const img = document.createElement("img") ; 
img.src = before[dog] ;
img.alt = dog ;


// caption on hover  
const caption = document.createElement("div") ; 
caption.classList.add("caption") ; 
caption.textContent = `Please adopt ${dog}` ; 

box.appendChild(img) ; 
box.appendChild(caption) ; 
gallery.appendChild(box) ; 

// popup on click  
 box.onclick = () => { 
    popupTitle.textContent = `${dog} was adopted!`;
    popupImg.src = after[dog]; 
    popup.classList.remove("hidden") ;  
 }
} 
// close popup 
closeBtn.onclick = () => { 
    popup.classList.add("hidden");  
} 

/** 
for(let dog in after) { 
     

     popup.appendChild(popupImg);
     popup.appendChild(popupTitle); 
     box.appendChild(popup);
    } 
*/