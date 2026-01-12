/* ============================================================
   Partie 1 – Génère un tableau d'élèves avec des notes et une moyenne
   ============================================================ */
function genererEleves() {

    // Taille aléatoire du tableau entre 7 et 10 élèves
    let taille_minimum = 7;
    let taille_maximum = 10;
    let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

    // Note maximale possible
    let note_maximum = 20;

    // Liste de prénoms possibles
    let prenoms = ["Romain", "Tevaitea", "Johan", "Fidel", "Tom", "Ilija", "Achille", "Alexis", "Raphael", "Enzo"];

    // Tableau qui contiendra les élèves
    let notes = [];

    // Création des élèves avec des notes aléatoires
    for (let i = 0; i < taille; i++) {
        let indice_random = Math.floor(Math.random() * prenoms.length);

        notes.push({
            prenom: prenoms[indice_random],
            noteMath: Math.floor(Math.random() * (note_maximum + 1)),
            noteFrancais: Math.floor(Math.random() * (note_maximum + 1)),
            noteHistoire: Math.floor(Math.random() * (note_maximum + 1))
        });
    }

    // Calcul de la moyenne pour chaque élève
    for (let i = 0; i < notes.length; i++) {
        notes[i].moyenne =
            (notes[i].noteMath + notes[i].noteFrancais + notes[i].noteHistoire) / 3;
    }

    // Retourne le tableau d'élèves
    return notes;
}


/* ============================================================
   Partie 2 –  Affiche chaque élève avec son prénom et sa moyenne
   ============================================================ */
function afficherEleves(eleves) {
    for (let i = 0; i < eleves.length; i++) {
        console.log(eleves[i].prenom + " - " + eleves[i].moyenne.toFixed(2));
    }
}


/* ============================================================
   Partie 3 – Retourne l'indice de la plus petite moyenne
   ============================================================ */
function trouverMoyenneMin(eleves, indexDepart) {

    // Initialisation du minimum
    let min = eleves[indexDepart].moyenne;
    let indice_min = indexDepart;

    // Recherche de la plus petite moyenne à partir de indexDepart
    for (let i = indexDepart + 1; i < eleves.length; i++) {
        if (eleves[i].moyenne < min) {
            min = eleves[i].moyenne;
            indice_min = i;
        }
    }

    return indice_min;
}


/* ============================================================
   Partie 4 – Affiche le nombre d'élèves, la moyenne min et max
   ============================================================ */
function afficherDonnees(eleves) {

    // Utilisation d'une fonction existante (bonus)
    let indiceMin = trouverMoyenneMin(eleves, 0);
    let min = eleves[indiceMin].moyenne;

    // Recherche de la moyenne maximale
    let max = eleves[0].moyenne;
    for (let i = 1; i < eleves.length; i++) {
        if (eleves[i].moyenne > max) {
            max = eleves[i].moyenne;
        }
    }

    console.log("Nombre total d'élèves : " + eleves.length);
    console.log("Moyenne la plus basse : " + min.toFixed(2));
    console.log("Moyenne la plus haute : " + max.toFixed(2));
}


/* ============================================================
   Partie 5 – Échange deux éléments du tableau
   ============================================================ */
function swap(eleves, indexA, indexB) {
    let temp = eleves[indexA];
    eleves[indexA] = eleves[indexB];
    eleves[indexB] = temp;
}


/* ============================================================
   Partie 6 – Trie le tableau d'élèves par moyenne croissante
   ============================================================ */
function triParSelection(eleves) {

    for (let i = 0; i < eleves.length - 1; i++) {

        // Utilisation d'une fonction existante (bonus)
        let indiceMin = trouverMoyenneMin(eleves, i);

        if (indiceMin !== i) {
            // Utilisation de swap (bonus)
            swap(eleves, i, indiceMin);
        }
    }
}


/* ============================================================
   Partie 7 – Appel des fonctions 
   ============================================================ */

// Génération des élèves
let eleves = genererEleves();

// Affichage de la liste initiale
console.log("Liste des élèves :");
afficherEleves(eleves);

// Affichage des données globales
console.log("\nDonnées globales :");
afficherDonnees(eleves);

// Tri du tableau
triParSelection(eleves);

// Affichage de la liste triée
console.log("\nListe triée :");
afficherEleves(eleves);
