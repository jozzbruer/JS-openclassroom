/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap3_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 19:58:34 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 19:58:39 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Complétez ce programme pour qu'il affiche le jour suivant le jour actuel.

Testez-le en modifiant la valeur de la variable jourActuel. 
Le programme doit afficher un message en cas de jour inconnu.
*/


const jourActuel = "";
let jourSuivant = "";

// Ajoutez votre code ici pour définir jourSuivant en fonction de jourActuel
// Le test avec if
if (jourActuel === "lundi"){
  jourSuivant = "Mardi";
}else if(jourActuel === "mardi"){
  jourSuivant = "mercredi";
}else if(jourActuel === "mercredi"){
  jourSuivant = "jeudi";
}else if(jourActuel === "jeudi"){
  jourSuivant = "vendredi";
}else if(jourActuel === "vendredi"){
  jourSuivant = "samedi";
}else if(jourActuel === "samedi"){
  jourSuivant = "dimanche";
}else if(jourActuel === "dimanche"){
  jourSuivant = "lundi";
}else {
  console.log("Le jour actuel est inconnu");
}

// Le test avec switch
switch (jourActuel){
  case "lundi":
    jourSuivant = "mardi";
    break;
    
  case "mardi":
    jourSuivant = "mercredi";
    break;
  case "mercredi":
    jourSuivant = "jeudi";
    break;
  case "jeudi":
    jourSuivant = "vrendredi";
    break;
  case "vendredi":
    jourSuivant = "samedi";
    break;
  case "samedi":
    jourSuivant = "dimanche";
    break;
  case "dimanche":
    jourSuivant = "lundi";
    break;
  default:
    console.log("Le jour actuel est inconnu");
}

if (jourSuivant) {
  console.log(`Demain, nous serons ${jourSuivant}`);  
}


