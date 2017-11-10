var service = require("./service")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


    for(option in menu){
        console.log(menu[option].libelle)
    }





var menu ={
    "1" :  {
            libelle :"1. Liste de tous les présentateurs",
            execute : function(){
                console.log("j'execute 1")
                console.log(service.listerTousLesPresentateurs())
                
               
            }
            
        },
    "2" :  {
        libelle :"2. Top présentateurs",
        execute : function(){
            console.log("j'execute 2")
            console.log(service.listerTopPresentateurs())
            
        }
    },
    "3" :  {
        libelle :"3. Liste des sessions",
        execute : function(){
            console.log("j'execute 3")
            console.log(service.listerToutesLesSessions())
            
        }
    },
    "4" :  {
        libelle :"4. Détail d'une session",
        
        execute : function(){
            console.log("j'execute 4")
            rl.question("saisir l'id de la session",(idSession) =>{
                
                    console.log(`vous avais saisie ` + idSession);
                    console.log(service.trouverUneSession(idSession).map(e => e.title + " " + afficherSpeakers(e.speakers)))
                    dodo()
            })

        }
    },
    "5" :  {
        libelle :"5. Quitter",
        execute : function(){
            console.log("j'execute 5")
            rl.close();
        }
    }

}



  function dodo(){
  rl.question('saisir votre choix ', function(id){
    if(id!="5"){
        menu[id].execute()
        dodo()
    }
        else{
            rl.close();
        }
   } )
}
dodo()


function afficherSpeakers (speakers) {
    var str = ""
    if (speakers != undefined) {
        speakers.forEach(function (nom) {
            str = str + service.listerTousLesPresentateurs().filter(speaker => speaker.id == nom ).map(speaker => speaker.lastname + " " + speaker.firstname+"| ")
        });
    } else {
        str = "Aucun"
    }
    return str
}