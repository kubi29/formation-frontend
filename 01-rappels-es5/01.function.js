console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;

var additionner = function(nb1,nb2){
    var resultat = nb1+nb2
    return resultat;

}

var resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 == "+ resultat1);

var somme = additionner;

var resultat2 = somme(nombre1,nombre2);

console.log("resultat2 == "+ resultat2);

var multiplication =function(nb1,nb2){

    resultat3 = nb1*nb2;
    return resultat3;
}

multiplication(10,20);

console.log("resultat3 == "+ resultat3);

var soustraction = function(nb1,nb2){

    resultat4 = nb1-nb2;
    return resultat4;

}


var afficherOperation = function(nomOperation ,operation ,nb1 ,nb2){

    var resultat = operation(nb1,nb2);
    console.log(nomOperation + " [ nb1 == " + nb1 +" nb2 == "+ nb2 +" ] == "+ resultat )
    return resultat;
}

afficherOperation("Somme",somme,20 , 40);

afficherOperation("Multiplication",multiplication ,10 ,20);

afficherOperation("Soustraction", soustraction ,15 ,5);