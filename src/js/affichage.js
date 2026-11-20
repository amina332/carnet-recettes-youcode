const recipeCount = document.getElementById("recipeCount")
const recipesContainer = document.getElementById("recipesContainer")
const emptyMessage = document.getElementById("emptyMessage")

export function afficherLesRecettes(recettes) {

    recipesContainer.innerHTML = ""

    recipeCount.textContent = recettes.length 

    recettes.forEach(function(recette){
        const carte = document.createElement("div")
        const image = document.createElement("img")
        image.src = recette.image
        carte.appendChild(image)
        const titre = document.createElement("h3") /*nom de recette */
        titre.textContent = recette.name
        const cuisine = document.createElement("p") /*pays */
        cuisine.textContent = recette.cuisine
        carte.appendChild(cuisine)
        const difficulty = document.createElement("p")  /*la difficulter */
        difficulty.textContent = recette.difficulty
        carte.appendChild(difficulty)
        const temps = document.createElement("p") /*temps de prep */
        temps.textContent = recette.prepTimeMinutes + " min"
        carte.appendChild(temps)
        carte.appendChild(titre)
    recipesContainer.appendChild(carte)

        });  
}



export function afficherNouvelleRecette(recette) {

    const carte = document.createElement("div")

    const image = document.createElement("img");
    image.src = "https://cdn.dummyjson.com/recipe-images/1.webp";
    image.alt = "Image de recette";
    carte.appendChild(image);


    const cuisine = document.createElement("p")
    cuisine.textContent = recette.cuisine
    carte.appendChild(cuisine)


    const difficulty = document.createElement("p")
    difficulty.textContent = recette.difficulty
    carte.appendChild(difficulty)


    const temps = document.createElement("p")
    temps.textContent = recette.prepTimeMinutes + " min"
    carte.appendChild(temps)


    const titre = document.createElement("h3")
    titre.textContent = recette.name
    carte.appendChild(titre)



    const bouttonSuprimer = document.createElement("button")
    bouttonSuprimer.textContent = "supprimer"
    bouttonSuprimer.dataset.id = recette.id
    carte.appendChild(bouttonSuprimer)

    recipesContainer.prepend(carte)
    recipeCount.textContent = Number(recipeCount.textContent) + 1
}