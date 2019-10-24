/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap4_exo.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 21:26:47 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 21:39:43 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Complétez le programme pour afficher la table de multiplication du nombre choisi.
*/


const nombre = 9; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Ajoutez votre code ici
let i  = 1;
let result = 0;

while (i <= 10){
  result = nombre * i;
  console.log(nombre+ " x "+i+ " = "+result);
  i++;
}