//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

/* ============================================================
   Partie 1 – Génération des élèves
   ============================================================ */

console.log("===== PARTIE 1 : GÉNÉRATION DES ÉLÈVES =====");

let prenoms = ["Alice", "Lucas", "Emma", "Noah", "Lina", "Hugo", "Chloé", "Louis", "Jade", "Nathan"];
let eleves = [];

for (let i = 0; i < taille; i++) {
    let noteFrancais = Math.floor(Math.random() * 21);
    let noteMaths = Math.floor(Math.random() * 21);
    let noteHistoire = Math.floor(Math.random() * 21);

    let moyenne = (noteFrancais + noteMaths + noteHistoire) / 3;

    eleves.push({
        prenom: prenoms[Math.floor(Math.random() * prenoms.length)],
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: moyenne
    });
}

for (let eleve of eleves) {
    console.log(eleve.prenom, "- Moyenne :", eleve.moyenne.toFixed(2));
}

/* ============================================================
   Partie 2 – Étude des valeurs
   ============================================================ */

console.log("===== PARTIE 2 : ÉTUDE DES VALEURS =====");

console.log("Nombre d'élèves :", eleves.length);

let minimum = eleves[0].moyenne;
let maximum = eleves[0].moyenne;

for (let i = 1; i < eleves.length; i++) {
    if (eleves[i].moyenne < minimum) {
        minimum = eleves[i].moyenne;
    }
    if (eleves[i].moyenne > maximum) {
        maximum = eleves[i].moyenne;
    }
}

console.log("Plus petite moyenne :", minimum.toFixed(2));
console.log("Plus grande moyenne :", maximum.toFixed(2));

/* ============================================================
   Partie 3 – Première étape du tri
   ============================================================ */

console.log("===== PARTIE 3 : RECHERCHE DU MINIMUM =====");

let indiceMin = 0;

for (let i = 1; i < eleves.length; i++) {
    if (eleves[i].moyenne < eleves[indiceMin].moyenne) {
        indiceMin = i;
    }
}

console.log(
    "Élève avec la plus petite moyenne :",
    eleves[indiceMin].prenom,
    "- Moyenne :", eleves[indiceMin].moyenne.toFixed(2),
    "- Indice :", indiceMin
);

/* ============================================================
   Partie 4 – Échange de valeurs
   ============================================================ */

console.log("===== PARTIE 4 : ÉCHANGE =====");

let temp = eleves[0];
eleves[0] = eleves[indiceMin];
eleves[indiceMin] = temp;

for (let eleve of eleves) {
    console.log(eleve.prenom, "- Moyenne :", eleve.moyenne.toFixed(2));
}

/* ============================================================
   Partie 5
   ============================================================ */

console.log("PARTIE 5");

let comparaisons = 0;
let echanges = 0;

// Copie du tableau avant tri
let tableauAvantTri = [];
for (let eleve of eleves) {
    tableauAvantTri.push({ ...eleve });
}

// Tri par sélection
for (let i = 0; i < eleves.length - 1; i++) {
    let indiceMin = i;

    for (let j = i + 1; j < eleves.length; j++) {
        comparaisons++;
        if (eleves[j].moyenne < eleves[indiceMin].moyenne) {
            indiceMin = j;
        }
    }

    if (indiceMin !== i) {
        let temp = eleves[i];
        eleves[i] = eleves[indiceMin];
        eleves[indiceMin] = temp;
        echanges++;

        // Affichage après chaque échange
        console.log("Après échange à l'indice", i, ":", eleves[i].prenom, "- Moyenne :", eleves[i].moyenne.toFixed(2));
    }
}

/* ============================================================
   Partie 6 – Affichage du résultat
   ============================================================ */

console.log("===== PARTIE 6 : RÉSULTAT =====");

console.log("Tableau avant tri :");
for (let eleve of tableauAvantTri) {
    console.log(eleve.prenom, "- Moyenne :", eleve.moyenne.toFixed(2));
}

console.log("Tableau trié par moyenne croissante :");
for (let eleve of eleves) {
    console.log(eleve.prenom, "- Moyenne :", eleve.moyenne.toFixed(2));
}

console.log("Comparaisons :", comparaisons);
console.log("Échanges :", echanges);

/* ============================================================
   BONUS – Tri par matière (Maths)
   ============================================================ */

console.log("===== BONUS : TRI PAR NOTE DE MATHS =====");

let elevesMaths = [];
for (let eleve of eleves) {
    elevesMaths.push({ ...eleve });
}

for (let i = 0; i < elevesMaths.length - 1; i++) {
    let indiceMax = i;

    for (let j = i + 1; j < elevesMaths.length; j++) {
        if (elevesMaths[j].noteMaths > elevesMaths[indiceMax].noteMaths) {
            indiceMax = j;
        }
    }

    if (indiceMax !== i) {
        let temp = elevesMaths[i];
        elevesMaths[i] = elevesMaths[indiceMax];
        elevesMaths[indiceMax] = temp;
    }
}

for (let eleve of elevesMaths) {
    console.log(eleve.prenom, "- Maths :", eleve.noteMaths);
}