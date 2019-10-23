/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap3_exo2.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 19:57:47 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 20:07:28 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*

Complétez ce programme pour qu'il affiche le résultat 
du baccalauréat en fonction de la moyenne du candidat :

Si elle est strictement inférieure à 10, il est recalé.
Si elle est comprise entre 10 et 12, il est reçu.
Si elle est supérieure ou égale à 12, il est reçu avec mention

*/

const moyenne = 8;

// Ajoutez votre code ici
if (moyenne < 10){
  console.log("L'etudiant est recale");
}else if(moyenne >= 10 && moyenne < 12){
   console.log("L'etudiant est recu");
}else{
  console.log("L'etudiant est recu avec mention");
}
