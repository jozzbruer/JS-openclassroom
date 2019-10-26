/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap8_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 01:37:38 by jquince           #+#    #+#             */
/*   Updated: 2019/10/25 01:37:59 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


/*
Nombre de voyelles

Complétez le programme en y ajoutant une fonction compterVoyelles() 
qui prend un mot en paramètre et renvoie son nombre de voyelles.

Une voyelle en majuscules reste une voyelle... A vous d'en tenir compte.
En revanche, vous n'êtes pas obligé.e de gérer les accents.
*/
// Ajoutez votre code ici
const voyelles = ["A","a","e","E","I","i",'o',"O","u","U","y","Y"];
​
function compterVoyelles(vo){
  let compteur = 0;
  for(v of vo){
    for(voyelle of voyelles){
      if (v === voyelle){
        compteur++;
      }
    }
  }
  console.log(compteur);
}
​
console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7
​