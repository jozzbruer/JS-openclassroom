/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap3_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 20:11:04 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 20:57:35 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*

Complétez ce programme pour afficher l'heure qu'il sera dans une seconde.

Attention, ce programme est moins simple qu'il en a l'air : 
validez votre solution en la testant avec les entrées suivantes. Vous devez obtenir les résultats indiqués.

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (minuit) */

let heures = 23; // Faire varier cette variable entre 0 et 23
let minutes = 59; // faire varier cette variable entre 0 et 59
let secondes =59; // faire varier cette variable entre 0 et 59

// Ajoutez votre code ici
if (heures === 23 && minutes === 59 && secondes ===59){
  heures = 0;
  minutes = 0;
  secondes = 0;
}else if (minutes === 59 && secondes ===59){
  heures++;
  minutes = 0;
  secondes = 0;
}else if(secondes === 59){
  heures = heures;
  minutes++;
  secondes = 0;
}else if (secondes < 59){
  heures = heures;
  minutes = minutes;
  secondes++;
}

console.log("La prochaine heure est : "+heures+"h"+minutes+"m"+secondes+"s");
