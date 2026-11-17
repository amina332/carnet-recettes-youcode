import { obtenirRecettes , rechercheRecettes} from "./api.js"
import { afficherLesRecettes } from "./affichage.js"
const searchInput = document.getElementById("searchInput")
const searchForm = document.getElementById("searchForm")
const Chercher = document.getElementById("Chercher")
searchForm.addEventListener("click", )

async function chargerRecettes() {
    try {
        const recettes = await obtenirRecettes()
        afficherLesRecettes(recettes)
    } catch (error) {
        console.log("Erreur :", error)
    }
}
chargerRecettes();
