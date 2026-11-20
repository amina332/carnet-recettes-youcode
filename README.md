# 🍳 Cuisine Club — Carnet de recettes

## 📌 Présentation du projet

Cuisine Club est une application web développée dans le cadre d'un projet individuel à YouCode.

Elle permet aux membres du club cuisine de consulter des recettes, rechercher une recette par mot-clé, proposer de nouvelles recettes et supprimer celles qui ne sont plus nécessaires.

L'application utilise l'API publique **DummyJSON** pour récupérer et manipuler les données sans avoir besoin de créer un serveur backend.

## 🎯 Objectifs du projet

- Afficher une liste de recettes avec leurs informations.
- Rechercher des recettes par mot-clé.
- Ajouter une nouvelle recette à l'aide d'un formulaire.
- Supprimer une recette avec confirmation.
- Gérer les états de chargement, les erreurs et les résultats vides.
- Manipuler une API REST avec Axios.

## 🛠️ Technologies utilisées

- **HTML5** : structure de la page.
- **Tailwind CSS** : mise en forme et design.
- **JavaScript** : dynamisme et manipulation du DOM.
- **Axios** : communication avec l'API.
- **DummyJSON API** : récupération et manipulation des recettes.
- **Git & GitHub** : gestion de versions et hébergement du projet.

## 📂 Structure du projet

```text
Cuisine-Club/
│
├── index.html
│
├── src/
│   └── output.css
│
├── js/
│   ├── main.js
│   ├── api.js
│   ├── validation.js
│   └── affichage.js
│
├── README.md
└── .gitignore
```

### Rôle des fichiers JavaScript

| Fichier | Rôle |
|---|---|
| `main.js` | Point d'entrée de l'application et gestion des événements. |
| `api.js` | Configuration d'Axios et gestion des requêtes API (GET, POST, DELETE). |
| `validation.js` | Vérification des données du formulaire avant l'envoi. |
| `affichage.js` | Affichage des recettes, messages et états de chargement dans le DOM. |

## 🌐 API utilisée

**DummyJSON – Recipes API**

Documentation : https://dummyjson.com/docs/recipes

URL de base :

```text
https://dummyjson.com
```

L'application utilise une instance Axios créée avec `axios.create()` pour centraliser les appels API et définir un délai d'attente (`timeout`).

### 📡 Tableau des requêtes API

| Méthode | URL | Rôle |
|---|---|---|
| GET | `/recipes?limit=12` | Récupérer les 12 recettes. |
| GET | `/recipes/search?q={mot-clé}` | Rechercher une recette. |
| POST | `/recipes/add` | Ajouter une nouvelle recette. |
| DELETE | `/recipes/{id}` | Supprimer une recette. |

### Données envoyées avec POST

```json
{
  "name": "Salade marocaine",
  "cuisine": "Moroccan",
  "difficulty": "Easy",
  "prepTimeMinutes": 20
}
```

La réponse du serveur est utilisée pour afficher la nouvelle recette dans la liste.

## ✨ Fonctionnalités

### 1. Consulter les recettes
- Afficher les recettes sous forme de cartes.
- Présenter la photo, le nom, la cuisine, la difficulté et le temps de préparation.
- Afficher le nombre total de recettes.

### 2. Rechercher une recette
- Rechercher une recette par mot-clé.
- Afficher les résultats correspondants.
- Afficher un message si aucune recette n'est trouvée.
- Permettre de revenir à la liste complète.

### 3. Ajouter une recette
- Proposer une nouvelle recette à travers un formulaire.
- Vérifier les champs avant l'envoi.
- Afficher les erreurs de validation sous les champs concernés.
- Désactiver le bouton pendant l'envoi.
- Afficher la nouvelle recette et un message de succès.

### 4. Supprimer une recette
- Supprimer une recette à partir de sa carte.
- Demander une confirmation avant la suppression.
- Retirer la carte après la réponse du serveur.
- Afficher un message de confirmation.

### 5. Gestion des erreurs
- Afficher un indicateur de chargement.
- Informer l'utilisateur lorsque le serveur est inaccessible.
- Gérer les erreurs HTTP (404 et 500).
- Afficher un bouton pour réessayer.

## 🧪 Scénarios de tests manuels

| Test | Action | Résultat attendu |
|---|---|---|
| Afficher les recettes | Ouvrir l'application. | Les recettes s'affichent. |
| Rechercher | Saisir un mot-clé existant. | Les recettes correspondantes s'affichent. |
| Aucun résultat | Saisir un mot-clé inexistant. | Message « Aucune recette trouvée ». |
| Champ vide | Envoyer le formulaire sans nom. | Un message de validation apparaît. |
| Nom invalide | Saisir moins de 3 caractères. | Un message d'erreur apparaît. |
| Ajouter | Remplir correctement le formulaire. | La nouvelle recette apparaît en premier. |
| Supprimer | Cliquer sur Supprimer et confirmer. | La recette disparaît de la liste. |
| Annuler suppression | Annuler la confirmation. | La recette reste affichée. |
| Chargement | Lancer une requête API. | L'indicateur de chargement apparaît. |
| Erreur serveur | Simuler une erreur API. | Un message d'erreur clair apparaît. |

## ⚠️ Limitation de l'API

DummyJSON est une API de démonstration.

Les opérations d'ajout et de suppression simulent le comportement d'un vrai serveur, mais les modifications ne sont pas enregistrées définitivement.

Par conséquent, après le rechargement de la page, la liste initiale des recettes est restaurée.

## 📸 Captures d'écran

Ajouter ici les captures d'écran de l'application :

- Liste des recettes.
- Indicateur de chargement.
- Message d'erreur.
- Aucun résultat de recherche.
- Formulaire d'ajout.

## 📋 Gestion du projet

Le travail a été organisé à l'aide d'un tableau Kanban afin de suivre les tâches, leur progression et leur réalisation.

**Lien du Kanban :** À compléter.

## 🚀 Démonstration

- **GitHub Repository :** À compléter.
- **GitHub Pages :** À compléter.

## 👩‍💻 Réalisation

Projet individuel réalisé dans le cadre de la formation YouCode.

**Année :** 2026

**Projet :** Cuisine Club — Carnet de recettes