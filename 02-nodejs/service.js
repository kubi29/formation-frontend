var info = require("./data/devfest-2015.js")

module.exports = {


    listerTousLesPresentateurs : function(){
        return info.speakers.map(e => e.firstname + " " + e.lastname )
    },

    listerToutesLesSessions : function(){
        return info.sessions.map(e => e.title )
    },

    trouverUneSession : function(idSession){
            
        return info.sessions.filter(function(se){
            return se.id == idSession;
        })
    },

    listerTopPresentateurs : function(){
        return info.speakers.filter(function(sp){
            return sp.topspeaker == true;
        }).map(e => e.firstname + " " + e.lastname )
    },

}


