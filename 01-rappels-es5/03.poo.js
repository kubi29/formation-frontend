function Personne (nom,prenom,pseudo){

    this.nom = nom ;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age;

    this.getNomComplet = function(){
        return ("nom =" + this.nom +" prénom = " + this.prenom + " pseudo = "+ this.pseudo );
    }

    this.getInitiales = function(){"Jules".charAt(0)
        return nom.charAt(0) + prenom.charAt(0) ;
    }

}

var jules = new Personne("Jules","LEMAIRE","jules44") ;
var paul = new Personne("Paul","LEMAIRE","paul44") ;

console.log(jules.getNomComplet());
console.log(paul.getNomComplet());

Personne.prototype.age = "NON RENSEIGNE";
jules.age = 30;

console.log(jules.age);

console.log(jules.getInitiales())

 var robert = {

    prenom = "Robert",
    nom = "LEPREFET",
    pseudo = "robert77",

    getInitiales = function(){"Jules".charAt(0)
    return ("nom =" + this.nom +" prénom = " + this.prenom + " pseudo = "+ this.pseudo );
    }
 }