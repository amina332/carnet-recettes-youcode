import { obtenirRecettes} from "./api.js"
import { afficherLesRecettes } from "./affichage.js"

async function chargerRecettes() {
    try {
        const recettes = await obtenirRecettes()
        afficherLesRecettes(recettes)
    } catch (error) {
        console.log("Erreur :", error)
    }
}
chargerRecettes();
