/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap2_exo2.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 19:58:22 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 19:58:39 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Complétez le programme pour convertir une tempéraure 
des degrés Celsius en degrés Fahrenheit.
*/

const tempCel = 37.1;

// Ajoutez ici le code pour convertir tempCel en degrés Fahrenheit
const tempF = (tempCel * 1.8) + 32;

console.log("La valeur de " + tempCel + " degre C est egale a " + tempF + " degre F")