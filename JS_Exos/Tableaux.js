console.log('Hello World !');

var maVariable="Bonjour";

//manipulation de tableau 

const chiffres = [1, 2, 3,4,5,6,7,8,9,10];

for (let i = 0; i<chiffres.length; i++ ){
    console.log(chiffres[i])
}


const Jours = ["Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
console.log(Jours[0])

const chiffres2 = [2,4,6,8,10];
let j = 0
for (let i = 0; i<chiffres.length; i ++ ){
    j+=chiffres2[i]
    console.log(j)

}

const Fruits = ["Banane", "Orange", "Pomme", "Mange", "litchi"];
Fruits.push("Kiwi");
console.log(Fruits)

const Notes = [2,4,6,8,10];
let k = 0
for (let i = 0; i<Notes.length; i ++ ){
    k+=Notes[i]
}
console.log(k/Notes.length)

const Oiseaux  = ["Colibri", "Mésange", "Merle", "Perroquet", "Etourneau"];
for (let i = 0; i<Oiseaux.length; i ++ ){
    if ("Colibri"=== Oiseaux[i]){
        console.log("Cet oiseau est Bien dans le tableau a la position",i, "du tableau")
    }

}

//correction 
const birdFinder =(tab,birdname) => {
    return tab.incudes(birdname)
}


const Pays = ["France", "USA", "Kossovo","Gabon","Suisse","Belgique","Angleterre"]

let PaysTri = Pays.sort()
console.log(PaysTri)

const Mois = ["Janvier", "Fevrier", "Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]
console.log(Mois[3])


let Tab = [];
let TabMax = 10;
let limite = TabMax + 1;
for (let i = 0; i < TabMax; i++) {
  Tab.push(Math.floor(Math.random()*limite));
}
console.log(Tab)

min=Tab[0]

for (let x = 0; x < TabMax; x++) {

        if (min>Tab[x+1]){
            min=Tab[x+1]
        }
    x+=1
    
 }
 console.log("le minimum du tableau est ",min)
 
max=Tab[0]

 for (let x = 0; x < TabMax; x++) {
 
         if (max<Tab[x+1]){
             max=Tab[x+1]
         }
     x+=1
     
  }
  console.log("le maximum du tableau est ",max)

  const Phrases = ["je mange", "je lis un livre", "elle regarde ","nou nageons"]


  let  PhraseL = 0
 for (let x = 0; x < Phrases.length ; x++) {
 
         if (Phrases[x].length < Phrases[x+1].length){
             PhraseL = Phrases[x+1]
         }
     x+=1
     
  }

  console.log("la phrase la plus longue est : ", PhraseL)





/*
Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console. 

Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console. 

Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. 

Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console. 

Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console. 

Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau. 
 
Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.

Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau. 

Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console. 

Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console. 



 - 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme. 
- 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau. 
- 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. 
- 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triés par ordre alphabétique. 
- 5 Erivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
- 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet. 
- 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant. 
- 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 
- 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne. 
- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules. */
