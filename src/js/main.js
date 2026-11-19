import { obtenirRecettes , rechercheRecettes} from "./api.js"
import { afficherLesRecettes } from "./affichage.js"
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


searchButton.addEventListener("click", async(event) =>{
    showAllBtn.addEventListener("click", () => {
    emptyMessage.classList.add("hidden")
    searchInput.value = ""
    chargerRecettes()
});
    event.preventDefault()
    const motCle = searchInput.value.trim()
    if(motCle === ""){
        return
    }
    const recettes = await rechercheRecettes(motCle)
    if (recettes.length === 0) {
        emptyMessage.classList.remove("hidden")
    } else {
        emptyMessage.classList.add("hidden")
        afficherLesRecettes(recettes)
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
chargerRecettes();
