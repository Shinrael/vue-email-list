vue-email-list
===
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
### Svolgimento
1. Nell'HTML creo un un v-for dentro ad li per creare il mio ciclo di email 
2. In js creo la funzione per generare la mail tramite axios e nel mounted richiamo la stessa funzione e la ciclo anche qui per riempire l'array che di base è vuoto.
3. BONUS: creo una const con valore booleana di base false chiamata allEmail e aggiungo un if alla funzione emailGenerate dove una volta arrivato a 10 email nell'array, la costante diventa true. Dopodichè nell'HTML aggiungo un v-if ad UL dove gli dico di procedere solo quando allEmail è uguale a true.