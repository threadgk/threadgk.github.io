const getArtists = async()=>{
    const url = "https://threadgk.github.io/projects/part6/json/artists.json"; 
    try{
        const response = await fetch(url); 
        return await response.json();
    } catch(error){
        console.error("Error fetching artists!", error);
    }
};
 const showArtists = async()=>{
    const artists = await getArtists();
    const artistContainer = document.querySelector(".art-container");

             

    artists.forEach((artist)=> {    
        
        const card = document.createElement("div");
        card.classList.add("artist-card"); 

        const pic = document.createElement("img");
        pic.src = artist.img;
        pic.alt = artist._name;

        const name = document.createElement("h2"); 
        name.textContent = artist._name;

        const dob =  document.createElement("p")
        dob.textContent = `Date of Birth: ${artist._dob}` ;

        const genre = document.createElement("p")
        genre.textContent = `Genre: ${artist._genre}` ;

        const debutYear = document.createElement("p")
        debutYear.textContent = `Debut Year: ${artist["_debut-year"]}` ;

        const debutAlbum = document.createElement("p")
        debutAlbum.textContent = `Debut Album: ${artist["_debut-album"]}` ;

        const description = document.createElement("p")
        description.textContent = artist._description ;

        card.append(pic, name, dob, genre, debutYear, debutAlbum, description);
        artistContainer.appendChild(card);
    }) ; 
 };
    showArtists();