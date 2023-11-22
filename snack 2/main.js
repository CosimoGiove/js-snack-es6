"use strict"

/*. esecuzione snack 2

- attraverso un array di oggetti, mi creo un array di sqaudre di calcio che a loro volta avranno delle proprietà:

1. nome della squadra
2. i punti totalizzati.
3. falli subiti.

solo il nome della squadra di calcio dovrà essere compilata le proprietà dovranno essere  settate a 0.
generare un numero randomico per le proprietà.
attraverso la destrutturazione mi creo un nuovo array  in cui conterrà  solo nomi e falli subiti.
stampare tutto a schermo. */

const squadraCalcio = [
    {
        nome: "juve",
        punti: 0,
        falli: 0
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "lecce",
        punti: 0,
        falli: 0
    },
]

squadraCalcio.forEach((elemento) => {
    const {nome,punti}= elemento
    elemento.punti = Math.floor(Math.random() * 101);
    elemento.falli = Math.floor(Math.random() * 11);
    //classifica totale delle squadre
    const classificaTotale =`${elemento.nome} ha totalizzato : ${elemento.punti} punti`
    
    console.log(classificaTotale)
})
//mappatura nome e falli
const nomiFalli = squadraCalcio.map(({ nome, falli }) => {
    console.log(`nome della squadra è: ${nome} e ha fatto ${falli} falli`);
    return squadraCalcio
})
console.log(nomiFalli)


