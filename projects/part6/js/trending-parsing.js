const getCharts = async()=>{
    const url = ""; 
    try{
        const response = await fetch(url); 
        return await response.json();
    } catch(error){
        console.error("Error fetching charts!", error);
    }
};
 const showCharts = async()=>{
    const charts = await getCharts();
    const chartsContainer = document.querySelector(".chart-container");

             

    charts.forEach((chart)=> {    
        
        const card = document.createElement("div");
        card.classList.add("chart-card"); 

     });
    }
