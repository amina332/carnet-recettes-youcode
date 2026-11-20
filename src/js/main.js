import { obtenirRecettes , rechercheRecettes , ajouterRecette , supprimerUneRecette} from "./api.js"
import { afficherLesRecettes , afficherNouvelleRecette } from "./affichage.js"
import {
    validerNom,
    validerCuisine,
    validerDifficulte,
    validerTemps
} from "../validation.js"



const searchInput = document.getElementById("searchInput")
const searchForm = document.getElementById("searchForm")
const searchButton = document.getElementById("searchButton")
const showAllBtn = document.getElementById("showAllBtn")
const emptyMessage = document.getElementById("emptyMessage")
const recipeForm = document.getElementById("recipeForm")
const recipeName = document.getElementById("recipeName")
const recipeCuisine = document.getElementById("recipeCuisine")
const recipeDifficulty = document.getElementById("recipeDifficulty")
const recipeTime = document.getElementById("recipeTime")
const nameError = document.getElementById("nameError")
const cuisineError = document.getElementById("cuisineError")
const difficultyError = document.getElementById("difficultyError")
const timeError = document.getElementById("timeError")
const successMessage = document.getElementById("successMessage")


searchButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const motCle = searchInput.value.trim();

    if (motCle === "") {
        return;
    }

    const recettes = await rechercheRecettes(motCle);

    if (recettes.length === 0) {
        emptyMessage.classList.remove("hidden");
        afficherLesRecettes([]);
    } else {
        emptyMessage.classList.add("hidden");
        afficherLesRecettes(recettes);
    }
});

showAllBtn.addEventListener("click", () => {
    emptyMessage.classList.add("hidden");
    searchInput.value = "";
    chargerRecettes();
});

const submitBtn = document.getElementById("submitBtn")


submitBtn.addEventListener("click", async (event) => {

    event.preventDefault()

    const erreurNom = validerNom(recipeName.value.trim())
    const erreurCuisine = validerCuisine(recipeCuisine.value)
    const erreurDifficulte = validerDifficulte(recipeDifficulty.value)
    const erreurTemps = validerTemps(Number(recipeTime.value))

    nameError.textContent = erreurNom
    cuisineError.textContent = erreurCuisine
    difficultyError.textContent = erreurDifficulte
    timeError.textContent = erreurTemps

    if (erreurNom || erreurCuisine || erreurDifficulte || erreurTemps) {
    return;
}

const nouvelleRecette = {
    name: recipeName.value.trim(),
    cuisine: recipeCuisine.value.trim(),
    difficulty: recipeDifficulty.value,
    prepTimeMinutes: Number(recipeTime.value)
}

submitBtn.disabled = true /*pour bloquer la boutton */

try {
    const recetteAjoutee = await ajouterRecette(nouvelleRecette)
    afficherNouvelleRecette(recetteAjoutee)
    recipeForm.reset()

        successMessage.textContent = "Recette ajoutee avec succes 😊"
        successMessage.classList.remove("hidden")

} catch (error) {
    console.log("Erreur :", error)
}finally {
    submitBtn.disabled = false
}

})

async function chargerRecettes() {
    try {
        const recettes = await obtenirRecettes()
        afficherLesRecettes(recettes)
    } catch (error) {
        console.log("Erreur :", error)
    }

}
chargerRecettes()


const recipesContainer = document.getElementById("recipesContainer")

recipesContainer.addEventListener("click" , function(event) {
    if (event.target.tagName === "BUTTON"){

        const id = event.target.dataset.id

        console.log(id);
        
    }
})

