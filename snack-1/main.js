"use scrict"
/*- attraverso un array di ogetti descrivo le proprietà delle mie bici nome e pese.
- mando a schermo la bici che pesa di meno.*/

const arrayBici = [
    //bici 1
    {

        nome: "Van Rysel",
        peso: 10

    },
    //bici 2
    {

        nome: "Hiland",
        peso: 12

    },
    //bici 3
    {

        nome: "Lapierre",
        peso: 15

    },
    //bici 4
    {

        nome: "Merida",
        peso: 13

    },
    //bici 5
    {

        nome: "Cube Attain",
        peso: 8

    },
    //bici 6
    {

        nome: "Triban",
        peso: 12

    },
]
let pesoPiccolo = 100
let nomePiccolo = ""
// ciclo l'array di oggetti
arrayBici.forEach((elemento, index) => {
    const { peso, nome } = arrayBici[index]
    console.log(peso, nome);
    if (peso < pesoPiccolo) {
        pesoPiccolo = peso;
        nomePiccolo = nome
    }

})

console.log(`

il nome della bici più leggera è ${nomePiccolo} e pesa: ${pesoPiccolo} kg
`)
//mando a schermo
const bici = document.querySelector(".bici");
bici.innerHTML =(`
il nome della bici più leggera è ${nomePiccolo} e pesa: ${pesoPiccolo} kg
`)




