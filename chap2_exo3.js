/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap2_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 19:58:28 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 19:58:39 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Complétez le programme afin qu'il permute les valeurs des deux variables.
*/

let nombre1 = 5;
let nombre2 = 3;

// Tapez votre code ici (sans rien modifier d'autre !)
let tempon = nombre1;
nombre1 = nombre2;
nombre2 = tempon;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5