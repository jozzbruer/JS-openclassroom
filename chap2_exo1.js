/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap2_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/22 19:58:17 by jquince           #+#    #+#             */
/*   Updated: 2019/10/22 19:58:39 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Observez le programme et tentez de prévoir 
les valeurs finales de chaque variable.
*/

let a = 2; // 2
a -= 1; // 1
a++; 2
let b = 8; // 8
b += 2; // 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a;  // 10
console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10
