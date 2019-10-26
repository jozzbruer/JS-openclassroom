/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap8_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 19:06:48 by jquince           #+#    #+#             */
/*   Updated: 2019/10/25 19:08:46 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Palindrome

// Renvoie l'inverse du mot passé en paramètre
const inverser = mot => {
    let motInverse = "";
  
    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (const lettre of mot) {
      motInverse = lettre + motInverse;
    }
  
    // Solution 2 : parcourir le mot de la fin vers le début
    /* for (let i = mot.length - 1; i >= 0; i--) {
      motInverse = motInverse + mot[i].toLowerCase();
    } */
    return motInverse;
  };
  
  // Renvoie vrai si le mot est un palindrome, faux sinon
  const estPalindrome = mot => {
    // On compare les chaînes en minuscules
    return inverser(mot).toLowerCase() === mot.toLowerCase();
  };
  
  console.log(estPalindrome("RadAr")); // true
  console.log(estPalindrome("KAYAk")); // true
  console.log(estPalindrome("Bora-Bora")); // false