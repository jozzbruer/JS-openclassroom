/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap7_exo2.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 01:02:41 by jquince           #+#    #+#             */
/*   Updated: 2019/10/25 01:03:22 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


/*
Somme des valeurs

Complétez le programme pour calculer puis afficher la somme des valeurs du tableau nombres.

const nombres = [11, 3, 7, 2, 9, 10];
let result = 0;
​
​*/

//Avec forEach
nombres.forEach(nombre =>{
  result = result + nombre;
});
​
//Avec boucle for -of
for(nombre of nombres){
  result = result + nombre;
}
console.log(`le resultat est : ${result}`)
​