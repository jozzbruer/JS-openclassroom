/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap7_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 01:22:59 by jquince           #+#    #+#             */
/*   Updated: 2019/10/25 01:27:43 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Maximum d'un tableau

Complétez le programme pour qu'il calcule et affiche ensuite 
la plus grande valeur présente dans le tableau.
*/
const valeurs = [3, 11, 7, 2, 9, 10];
let max = 0;
let i;
// Ajoutez votre code ici
valeurs.forEach(valeur =>{
   if(valeur > max){
    max = valeur
  }else{
    max = max;
  }
})
​
for(valeur of valeurs){
  if(valeur > max){
    max = valeur
  }else{
    max = max;
  }
}

for(i = 0; i < valeurs.length; i++ ){
    if(valeurs[i] > max){
      max = valeurs[i];
    }
  }
console.log(max);
​