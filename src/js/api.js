
import axios from "https://cdn.jsdelivr.net/npm/axios@1.13.2/+esm"; /*pour utiliser meth http axios */

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
})

export default api


function gererErreur(error) {
    
    if (!error.response) {
        return "Serveur injoignable. Vérifiez votre connexion."
    }

    if (error.response.status === 404) {
        return "Recette introuvable."
    }

    if (error.response.status === 500) {
        return "Erreur du serveur. Réessayez plus tard."
    }

    return "Une erreur est survenue."
}




export async function obtenirRecettes() {
    try {
        const response = await api.get("/recipes?limit=12")
        return response.data.recipes
    } catch (error) {
        error.message = gererErreur(error)
        throw error
    }
}  




export async function rechercheRecettes(motCle) {
    try {
        const response = await api.get("/recipes/search", {
            params: {
                q: motCle
            }
        })

        return response.data.recipes;

    } catch (error) {
        error.message = gererErreur(error)
        throw error
    }
}


export async function ajouterRecette(nouvelleRecette) {
    try {
        const response = await api.post("/recipes/add", nouvelleRecette)
        return response.data
    } catch (error) {
        error.message = gererErreur(error)
        throw error
    }
}



export async function supprimerUneRecette(id) {
    try {
        const response = await api.delete(`/recipes/${id}`)
        return response.data
    } catch (error) {
        error.message = gererErreur(error)
        throw error
    }
}
