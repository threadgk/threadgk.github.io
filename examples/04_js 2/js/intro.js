/* first way
const sayHello = ()=>{
    console.log("Hello World");
}
document.getElementById("btn-click-me").onclick = sayHello;
*/

/* if you are going to call this function one time */
document.getElementById("btn-click-me").onclick = () => {
    console.log("Hello World");
}; 