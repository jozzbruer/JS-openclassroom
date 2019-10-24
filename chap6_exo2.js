/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap6_exo2.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/24 03:23:11 by jquince           #+#    #+#             */
/*   Updated: 2019/10/24 03:23:31 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Modélisation d'un chien
Complétez ce programme pour ajouter la définition de l'objet chien.
*/
// Ajoutez votre code ici
const chien = {
  nom : "Crockdur",
  race: "mâtin de Naples",
  taille : "75",
  
  aboyer(){
    return "Grrr ! Grrr";
  }
};
​
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);
​
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
​