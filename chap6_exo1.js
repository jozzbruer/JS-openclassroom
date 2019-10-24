/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap6_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/24 03:17:43 by jquince           #+#    #+#             */
/*   Updated: 2019/10/24 03:18:20 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Expérience du personnage

Complétez le programme pour ajouter à l'objet aurora défini dans le cours 
une propriété nommée xp représentant son expérience. Sa valeur initiale est de 0.

L'expérience doit apparaître dans la description du personnage.
*/
// Ajoutez votre code ici
const aurora = {
  vie: 150,
  xp : 0,
  
  decrire(){
    return (`La vie est aurora est ${aurora.vie} et sn experience est ${this.xp}`)
  }
};
// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
console.log(aurora.decrire());
​
console.log("Aurora apprend une nouvelle compétence");
aurora.xp += 15;
​
// "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
console.log(aurora.decrire());
​