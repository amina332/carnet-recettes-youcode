const recipeCount = document.getElementById("recipeCount")
const recipesContainer = document.getElementById("recipesContainer")

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