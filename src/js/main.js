import { obtenirRecettes , rechercheRecettes} from "./api.js"
import { afficherLesRecettes } from "./affichage.js"
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

submitBtn.addEventListener("click", (event) => {
    const erreurNom = validerNom(recipeName.value.trim())
    const erreurCuisine = validerCuisine(recipeCuisine.value)
    const erreurDifficulte = validerDifficulte(recipeDifficulty.value)
    const erreurTemps = validerTemps(Number(recipeTime.value))

    nameError.textContent = erreurNom
    cuisineError.textContent = erreurCuisine
    difficultyError.textContent = erreurDifficulte
    timeError.textContent = erreurTemps
});
async function chargerRecettes() {
    try {
        const recettes = await obtenirRecettes()
        afficherLesRecettes(recettes)
    } catch (error) {
        console.log("Erreur :", error)
    }
}
chargerRecettes();
