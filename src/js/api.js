
import axios from "https://cdn.jsdelivr.net/npm/axios@1.13.2/+esm"; /*pour utiliser meth http axios */

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
})

export default api

export async function obtenirRecettes() {    /*peut ustilier await dans elle */
    const response = await  api.get("/recipes?limit=12")  /*la commande */
    return  response.data.recipes  /*returner liste des repas */
}

export async function rechercheRecettes(motCle) {
    const response = await api.get("/recipes/search", {
        params: {
            q: motCle
        }
    })

    return response.data.recipes;
}


