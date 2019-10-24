/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap4_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/23 20:24:09 by jquince           #+#    #+#             */
/*   Updated: 2019/10/23 20:53:26 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
FIZBUZZ
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
Vous pouvez utiliser l'opérateur modulo % qui renvoie le reste de la division d'un entier par un autre.

*/



 let i = 1;
​
while(i <= 100){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(i+ "..... FizzBuzz .....");
  }else if (i % 3 === 0){
     console.log(i+ "..... Fizz .....");
  }else if (i % 5 === 0){
    console.log(i+ "..... Buzz .....");
}else
  console.log(i);
  i++;
}
​
