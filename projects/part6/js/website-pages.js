/** shows/hides menu  **/
document.getElementById("nav-toggle").onclick = () => {
const nav = document.getElementById("nav-itms"); 
const arrow = document.getElementById("nav-toggle");
if(nav.style.display === "none" || nav.style.display === "") 
{
    nav.style.display = "block";  
    arrow.innerHTML = "&#9660";
} else {
    nav.style.display = "none";
    arrow.innerHTML = "&#9650";
}
}
