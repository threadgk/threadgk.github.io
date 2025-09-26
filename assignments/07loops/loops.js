document.getElementById("btn-draw").onclick = () => {
    const sceneDraw = document.getElementById("scene") ; 
    sceneDraw.innerHTML = "";

for (let i=0; i < 6; i++){
        const cloud = document.createElement("div");  
        cloud.className = "cloud";
        sceneDraw.append(cloud);
    }

    sceneDraw.append(document.createElement("br")); 

for ( let i = 0 ; i < 6; i++ ) {
    const tree = document.createElement("div");
    tree.className = "tree"; 

    const top = document.createElement("div");
    top.className = "tree-top"; 

    const trunk = document.createElement("div");
    trunk.className = "tree-trunk"; 


    tree.append(top);
    tree.append(trunk);
    sceneDraw.append(tree);

} 


const hour = new Date().getHours(); 

if ( hour >= 18 || hour < 6 ) {
    document.body.style.background = "black"; 
    const moon = document.createElement("div"); 
    moon.className = "moon";
    document.body.append(moon);
} else {
     document.body.style.background = "lightblue";   
     const sun = document.createElement("div");
     sun.className = "sun";
     document.body.append(sun);
    }

    }