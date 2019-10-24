/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap4_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 21:09:58 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 21:17:28 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*

Complétez ce programme pour qu'il fasse 10
tours de manège en affichant le numéro du tour à chaque tour :

Le manège démarre
C'est le tour numéro 1
C'est le tour numéro 2
...
C'est le tour numéro 10
Le manège s'arrête
*/

const nbTours = 10;

console.log("Le manège démarre");

// Ajoutez votre code ici
let i = 1;

// Avec For Loop
for (let i = 1; i <= nbTours; i++){
  console.log("C'est le tour numéro "+ i);
}
// Avec while loop
while(i <= nbTours){
  console.log("C'est le tour numéro "+ i);
  i++;
}

console.log("Le manège s'arrête");


