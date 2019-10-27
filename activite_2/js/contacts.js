/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

function menu(){
    console.log("Bienvenue dans le gestionnaire de contact");
    console.log("1: Afficher contact");
    console.log("2: Ajouter contact")
    console.log("0 Quitter")
    console.log("=================================");
}

menu();
 let prenoms = ["Carole","Mélodie"];
 let noms = ["Lévisse","Nelsonne"];

 function ajouterContact(){
    let n = prompt("Entrer le nom");
    let x = prompt("Entrer le prenom");
    if(n !== null || x !== null)
        noms.push(n);
        prenoms.push(x);
        afficherContact();
    if(!n)
        console.log("error");
}

 function afficherContact(){
    let i = 0;
    while( i < noms.length || i < prenoms.length){
        console.log("Nom: "+noms[i] + ", Prenom: " +prenoms[i]);
        i++; 
    }
    console.log("=================================");
}
compteur = 0
    
// do{
    let choix = prompt("choisisser une option:");
   // compteur++;
    switch (choix){
        case "1":
            afficherContact();
            menu();
        break;
        case "2":
            ajouterContact();
            break;
        case "0":
            //compteur = 1000001;
            break;
            
    }
// }while(compteur <= 10000 );