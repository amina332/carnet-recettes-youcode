export function validerNom(nom) {

    if (nom.length < 3 || nom.length > 60) {
        return "Le nom doit contenir entre 3 et 60 caractères"
    }

    return ""
}
export function validerCuisine(cuisine){
    if (cuisine.trim() === "") {
        return "veuillez saisir une cuisine"        
    }
    return""
}
export function validerDifficulte(difficulter){
    if (difficulter === "") {
        return "veuillez choisir une difficulter"
    }
    return ""
}
export function validerTemps(temps) {
    if (temps < 1 || temps > 300) {
        return "le temps doit etre entre 1 et 300 min"
    }
    return ""
}