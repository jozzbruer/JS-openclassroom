/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap7_exo1.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 00:31:17 by jquince           #+#    #+#             */
/*   Updated: 2019/10/25 00:31:53 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Les Trois Mousquetaires

Ecrivez un programme qui :

crée un tableau nommé mousquetaires contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
affiche le nom de chaque mousquetaire à l'aide d'une boucle for ;
ajoute au tableau le mousquetaire d'Artagnan ;
affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach().
supprime Aramis du tableau ;
affiche le nom de chaque mousquetaire avec une boucle for-of.

*/
// Ajoutez votre code ici
const mousquetaires = ["Athos","Porthos","Aramis"];
​
for (let i = 0; i <= mousquetaires.length; i++){
  console.log(mousquetaires[i]);
}
mousquetaires.push("d'Artagnan");
​
mousquetaires.forEach(mousquetaire =>{
  console.log(mousquetaire);
})
console.log("=========");
mousquetaires.splice(2,1);
​
for(mousquetaire of mousquetaires){
  console.log(mousquetaire);
}
​