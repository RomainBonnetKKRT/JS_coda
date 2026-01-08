//Partie une//

const nom_classe = "B1A";
let nombre_eleves = 3;
let classe_ouverte = true;

console.log("Nom de la classe :", nom_classe);
console.log("Nombre d'élèves :", nombre_eleves);
console.log("Classe ouverte :", classe_ouverte);

//Partie deux//

let eleve_1 = {
  prenom: "Romain",
  note_maths: 20,
  note_francais: 18
};

console.log("Prénom de l'élève :", eleve_1.prenom);


//Partie trois//

let eleves = [
  {
    prenom: "Romain",
    note_maths: 20,
    note_francais: 18
  },
  {
    prenom: "Ilija",
    note_maths: 15,
    note_francais: 8
  },
  {
    prenom: "Tom",
    note_maths: 11,
    note_francais: 14
  }
];

for (let i = 0; i < eleves.length; i++) {
  console.log("Élève :", eleves[i].prenom);
}

//Partie quatre//

for (let i = 0; i < eleves.length; i++) {
  eleves[i].moyenne =
    (eleves[i].note_maths + eleves[i].note_francais) / 2;

  console.log(
    eleves[i].prenom,
    "- Moyenne :",
    eleves[i].moyenne
  );
}
