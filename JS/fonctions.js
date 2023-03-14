
// utilisation des équivalents 

/*if (1===true){
    console.log("equals")
}else{
    console.log("ne")
}*/

    //structure :

/*let MyObject = {
	Firstname : 'jhon',
	Lastname : 'Doe',
	age : '25',
}       object !*/

//déclaration de Fonction != appel de fonction :
/* la notation peut etre différente 

function sum(a, b)  {     // parametres 
  return a+b;
 }*/

// fonction flechée !!!INDISPENSABLE EN JS 

//let sum = (a,b) => a+b // return IMPLICITE 
// ou encore 

const sum = (a,b) => { // si accolades return EXPLICITE 
    return a+b
}


//appel de fonction 

   const result = sum(4,5)
   
   console.log(result)

// PROGRAMMATION ASYNCHRONE 

/*setTimeout (
    function(){
        console.log("Hello again !");

    }, 5000)
    console.log('Hello World !')*/



   /* - 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme. */

   //let sum = (a,b) => a+b






   /* - 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau. */

    function maxTab(Tab){ 
        let maxTab = Math.max(...Tab);
    
    return maxTab

    }
    tab = [10,20,30,5,4]
    console.log(maxTab(tab))

  /*  - 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. */

  function supprimerVoyelles(chaine) {
    let nouvelleChaine = "";
    for (let i = 0; i < chaine.length; i++) {
      let caractere = chaine.charAt(i).toLowerCase();
      if (caractere !== "a" && caractere !== "e" && caractere !== "i" && caractere !== "o" && caractere !== "u" && caractere !== "y") {
        nouvelleChaine += chaine.charAt(i);
      }
    }
    return nouvelleChaine;
  }
phrase = "je mange "
console.log(supprimerVoyelles(phrase))
// correction 
/*function removeVoyels(str){
  return str.replace(/[aeiouy]/gi,'');
}
*/


   /* - 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triés par ordre alphabétique. */

   function trierSTR(carac){
    trierSTR = carac.sort()
    return carac;
   }
   const Pays = ["France", "USA", "Kossovo","Gabon","Suisse","Belgique","Angleterre"]

   console.log(trierSTR(Pays))
   /*
    - 5 Erivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
    */
   function Nombre (num){
    const ones = [' ', 'one' ,'two','tree','four','five','six','seven','eight','nine','ten']
    const tens = [' ',' ','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
    const teens =  ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'sevnteen', 'eighteen', 'nineteen']
    if (num<10){
      return ones[num];
    }
      else if (num <20){
        return teens [num-10];
      }
      else {
        return tens[Math.floor(num/10)] + '-' + ones[num%10];
      }
    }
   console.log(Nombre(42))
   
   /* - 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet. */
   
   const someObject ={
    firstname : 'Théophile',
    lastname: 'Faugeras',
    age: 19,
    hasDriverLicence: false,
    placeOfBirth: 'Nogent-Sur-Marne',
   }


   for (const key in someObject ){
    const element = someObject[key]
    console.log(element)
   }
   
// correcion 

const getPropertyValues = (someObject, str) =>
{
    return someObject.map((obj) => obj[str])
}

   /*
    - 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant. */
   tab2= [10,5,8,67,4,39]
    function sortDescending (tab2){
      return tab2.sort((a, b)=> b-a)

   }
   console.log(sortDescending(tab2))



    
    /*- 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. */



   const vowelsUp = (str1) =>{

    return  str1.replace(/[aeiouy]/i, vowel => vowel.toUpperCase()); 
   }
   const resulte = vowelsUp('je mange')
   console.log(resulte)

    /*- 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne. */
    
    const countVowels = str => {
      
      return str.match(/[aeiouy]/gi || []).length;
    }
    const resultat = countVowels('je mange')
    console.log(resultat)
    /*- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules. */

    /*function sum(x, y, z) {
      return x + y + z;
    }
    
    const numbers = [1, 2, 3];
    
    console.log(sum(...numbers));
     Expected output: 6*/
  
  