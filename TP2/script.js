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

///////////////////////////////////////////////////////////////////////////////

//Partie_une//

console.log(notes);

let minVal = notes[0];
let maxVal = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] < minVal) minVal = notes[i];
    if (notes[i] > maxVal) maxVal = notes[i];
}

console.log("Plus petite valeur :", minVal);
console.log("Plus grande valeur :", maxVal);

//Partie_deux//

let indiceMin = 0;

for (let i = 1; i < notes.length; i++) {
    if (notes[i] < notes[indiceMin]) indiceMin = i;
}

console.log(`Plus petite valeur trouvée : ${notes[indiceMin]} à l'indice ${indiceMin}`);

//Partie_trois//

let temp = notes[0];
notes[0] = notes[indiceMin];
notes[indiceMin] = temp;

console.log("Tableau après le premier échange :", notes);

//Partie_quatre//

let nbEchanges = 0;
let nbVerifications = 0;

for (let i = 0; i < notes.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < notes.length; j++) {
        nbVerifications++;
        if (notes[j] < notes[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
        [notes[i], notes[minIndex]] = [notes[minIndex], notes[i]]; // échange moderne
        nbEchanges++;
        console.log(`Échange étape ${i} :`, notes);
    }
}