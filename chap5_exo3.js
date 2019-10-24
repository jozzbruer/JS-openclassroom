/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap5_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/23 23:42:44 by jquince           #+#    #+#             */
/*   Updated: 2019/10/24 03:17:15 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Calculatrice

// Effectue les 4 opérations arithmétiques de base
function calculer(x, i, y) {
    
    switch (i) {
      case "+":
        return  x + y;
        break;
      case "-":
        return  x - y;
        break;
      case "*":
        return  x * y;
        break;
      case "/":
        return  x / y;
        break;
    }
    
  }
  
  console.log(calculer(4, "+", 6)); // 10
  console.log(calculer(4, "-", 6)); // -2
  console.log(calculer(2, "*", 0)); // 0
  console.log(calculer(12, "/", 0)); // Infinity
  