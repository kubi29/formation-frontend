var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element){
    console.log(element);
})

var lettreADansToutesLesVilles = villes.every(
    function(ville){
        return ville.includes('a')
    }
)

console.log("lettreADansToutesLesVilles == "+ lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(
    function(ville){
        return ville.includes('-');
    }
)

console.log("auMoinsUneVilleAvecUnTiret == "+ auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(
    function(ville){
        return (!ville.includes('-') && !ville.includes(" "));
    }
)

console.log("villesSansTiretSansEspace == [ "+ villesSansTiretSansEspace + " ]");
