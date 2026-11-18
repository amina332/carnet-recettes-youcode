import { obtenirRecettes , rechercheRecettes} from "./api.js"
import { afficherLesRecettes } from "./affichage.js"
const searchInput = document.getElementById("searchInput")
const searchForm = document.getElementById("searchForm")
const searchButton = document.getElementById("searchButton")

searchButton.addEventListener("click", async(event) =>{
    event.preventDefault()
    const motCle = searchInput.value.trim()
    if(motCle === ""){
        return
    }
    const recettes = await rechercheRecettes(motCle)
    afficherLesRecettes(recettes)
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
