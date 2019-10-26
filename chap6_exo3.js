/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   chap6_exo3.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jquince <jquince@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/24 22:31:55 by jquince           #+#    #+#             */
/*   Updated: 2019/10/24 22:32:21 by jquince          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Modélisation d'un compte bancaire

Complétez ce programme pour créer un objet compte ayant les propriétés suivantes :

Une propriété titulaire valant "Alex".
Une propriété solde valant initialement 0.
Une méthode crediter() ajoutant le montant passé en paramètre 
(éventuellement négatif) au solde du compte.
Une méthode decrire() renvoyant la description du compte.
Utilisez cet objet pour afficher sa description, le créditer de 250, 
puis le débiter de 80, et enfin afficher de nouveau sa description.
*/
// Ajoutez votre code ici
const compte = {
  titulaire : "Alex",
  solde : 0,
  
  crediter(x){
    this.solde = this.solde + x;
  },
  decrire(){
    console.log(`Le titulaire du compte est ${this.titulaire} le montant est de du compte est ${this.solde} dollar(s)`)
  }
};
​
console.log(compte.decrire());
// Credition le solde de 250 dollars
compte.crediter(250);
compte.crediter(-80);
console.log(compte.decrire());
​
