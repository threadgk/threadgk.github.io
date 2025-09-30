/** shows/hides menu  **/
document.getElementById("nav-toggle").onclick = () => {
const nav = document.getElementById("nav-itms"); 
const arrow = document.getElementById("nav-toggle");
if(nav.style.display === "none" || nav.style.display === "") 
{
    nav.style.display = "bl