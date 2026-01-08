//Partie une//

//declaration des variables//
const nom_classe = "B1A";
let nombre_eleves = 3;
let classe_ouverte = true;

//affichage dans la console//
console.log("Nom de la classe :", nom_classe);
console.log("Nombre d'élèves :", nombre_eleves);
console.log("Classe ouverte :", classe_ouverte);

//Partie deux//


//creation de l'objet representant un élève//
let eleve_1 = {
  prenom: "Romain",
  note_maths: 20,
  note_francais: 18
};

//affichage dans la console, uniquement le prenom de l'élève//
console.log("Prénom de l'élève :", eleve_1.prenom);


//Partie trois//

//tableau contenant les differents élèves en forme d'objet//
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

//affichage dans la console, de chaque élève//
  console.log("Élève :", eleves[i].prenom);
}

//Partie quatre//

//calcul de la moyenne des different élèves//
for (let i = 0; i < eleves.length; i++) {
  eleves[i].moyenne =
    (eleves[i].note_maths + eleves[i].note_francais) / 2;

//affichage des moyennes des élèves dans la console//
  console.log(
    eleves[i].prenom,
    "- Moyenne :",
    eleves[i].moyenne
  );
}

//partie cinque//

//vérifie si l'élèves est admis ou non + l'affiche dans la console//
for (let i = 0; i < eleves.length; i++) {
  if (eleves[i].moyenne >= 10) {
    console.log(eleves[i].prenom, ": Admis");
  } else {
    console.log(eleves[i].prenom, ": Refusé");
  }
}

//partie six//

for (let i = 0; i < eleves.length; i++) {
//tester les conditions et les comparer//
  switch (true) {
    case eleves[i].moyenne >= 16:
      console.log(eleves[i].prenom, "- Mention : Très bien");
      break;

    case eleves[i].moyenne >= 14:
      console.log(eleves[i].prenom, "- Mention : Bien");
      break;

    case eleves[i].moyenne >= 12:
      console.log(eleves[i].prenom, "- Mention : Assez bien");
      break;

    case eleves[i].moyenne >= 10:
      console.log(eleves[i].prenom, "- Mention : Passable");
      break;

//si auccune conditions n'est remplies il sera considerais comme cas par default//
    default:
      console.log(eleves[i].prenom, "- Mention : Insuffisant");
  }
}

//partie sept//

let compteur = 0;
let admis = 0;


//boucle pour acceder à chaque élèves//
while (compteur < eleves.length) {

//ajoute un au compteur dès qu'un élève a une moyenne =>10//
  if (eleves[compteur].moyenne >= 10) {
    admis++;
  }
  compteur++;
}

//affiche le nombre d'élève total admis//
console.log("Nombre d'élèves admis :", admis);

//partie BONUS//

//Moyenne de la classe//
let somme_moyennes = 0;

for (let i = 0; i < eleves.length; i++) {
  somme_moyennes += eleves[i].moyenne;
}

let moyenne_classe = somme_moyennes / eleves.length;
console.log("Moyenne de la classe :", moyenne_classe);


//Ajout d'un nouvel élève//
eleves.push({
  prenom: "Lina",
  note_maths: 15,
  note_francais: 14
});

nombre_eleves = eleves.length;
console.log("Nouveau nombre d'élèves :", nombre_eleves);

//affiche le nombre d'élève total admis//
console.log("Nombre d'élèves admis :", admis);

//Résultat de l'admissions ou non//
if (admis === eleves.length) {
  console.log("Félicitations ! Tous les élèves sont admis 🎉");
} else {
  console.log("Tous les élèves ne sont pas admis.");
}