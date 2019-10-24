/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap5_exo2.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/23 23:42:49 by jquince           #+#    #+#             */
/*   Updated: 2019/10/24 00:20:06 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Minimum de deux nombres

En supposant que la fonction JavaScript Math.min()
n'existe pas, complétez le programme pour que la fonction min() 
renvoie le plus petit des deux nombres passés en paramètres.
*/

// Ajoutez votre code ici
function min(x,y){
  if (x > y){
    return y;
  }else{
    return x;
  }
}
console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9));  // 9
console.log(min(1, 1));   // 1
​