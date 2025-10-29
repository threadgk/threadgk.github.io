const getCharts = async()=>{
    const url = "https://threadgk.github.io/projects/part6/json/charts.json"; 
    try{
        const response = await fetch(url); 
        return await response.json();
    } catch(error){
        console.error("Error fetching charts!", error);
    }
};
 const showCharts = async()=>{
    const charts = await getCharts();
    const chartsContainer = document.querySelector(".charts-container");

    charts.forEach((chart)=> {    
        
        const card = document.createElement("div");
        card.classList.add("chart-card");  

        const img = document.createElement("img");
        img.src = chart.img ;
        img.alt = chart._website ;

        const title = document.createElement("h2");
        title.textContent = chart._website; 

        const description = document.createElement("p") ; 
        description.textContent = chart._description ;

        const link = document.createElement("a") ;
        link.href = chart.url ; 
        link.textContent = "View Full Chart" ; 
        link.target = "_blank" ;
        link.classList.add("chart-link") 

        const list = document.createElement("ol") ;
        for (let i = 1; i <= 20; i++) { 
            const songKey = `_${i}` ; 
            if (chart[songKey]) {
                const listItem = document.createElement("li"); 
                listItem.textContent = chart[songKey] ;
                list.appendChild(listItem);
            }
        }
        card.append(img, title, description, link, list);
        chartsContainer.appendChild(card); 
     }); 
     
    };showCharts();


