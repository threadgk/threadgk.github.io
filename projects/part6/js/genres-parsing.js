const getGenres = async()=> { 
    const url = "https://threadgk.github.io/projects/part6/json/genres.json";
    try{
        const response = await fetch (url) ;
        return await response.json() ; 
    } catch (error){
        console.error("Error fetching Genres!", error);
    }
}; 

const showGenres = async()=> {
    const genres = await getGenres(); 
    const genreContainer = document.querySelector(".genres-container"); 


    genres.forEach((genre)=> {
        const card = document.createElement("div");
        card.classList.add("genre-card"); 

        const genreSection = document.createElement("section"); 
        genreSection.classList.add("genre-section");

        const genreName = document.createElement("h2"); 
        genreName.textContent = genre._genre;

        const description = document.createElement("p");
        description.textContent = genre._description; 

        // sub genre section 
        const subGenreContainer = document.createElement("div"); 
        subGenreContainer.classList.add("subgenre-container"); 

        const subGenre = document.createElement("h3") ; 
        subGenre.textContent = "Subgenres"; 
        subGenreContainer.appendChild(subGenre); 

        genre["sub-genres"].forEach(subgenre => {

            const subGenreDiv = document.createElement("div"); 
            subGenreDiv.classList.add("subgenre-card"); 

            const subName = document.createElement("h4");
            subName.textContent = subgenre.name; 

            const subDescription = document.createElement("p");
            subDescription.textContent = subgenre.description;

            const subLink = document.createElement("a"); 
            subLink.textContent = "View Playlist"; 
            subLink.href = "#";  /** make playlist then replace this subgenre["rec-link"]; + subLink.target = "_blank"; to open in new tab  */
            subLink.classList.add("subgenre-link"); 

            subGenreDiv.appendChild(subName); 
            subGenreDiv.appendChild(subDescription); 
            subGenreDiv.appendChild(subLink); 

            subGenreContainer.appendChild(subGenreDiv);
        }); 

        genreSection.appendChild(genreName); 
        genreSection.appendChild(description); 
        genreSection.appendChild(subGenreContainer); 

        genreContainer.appendChild(genreSection);
    }) ; 
};
    showGenres();
