// ``
// Creare una funzione che accetti un array di oggetti rappresentanti libri. Questa funzione deve calcolare un prezzo scontato del 10% per ciascun libro, 
// aggiungere una chiave "prezzoScontato" a ogni oggetto libro e metterlo in un NUOVO array.

// Descrizione:
// Implementare una funzione chiamata applicaSconto che prenda un array di oggetti. Ogni oggetto rappresenta un libro con le seguenti proprietà:

// -titolo (string): Il titolo del libro.
// -autore (string): L'autore del libro.
// -prezzo (number): Il prezzo originale del libro.


// -La funzione deve eseguire le seguenti azioni:

// Controllare se l'input è un array. In caso contrario, restituire un errore indicando che l'input non è un array, gestione con Promise.

// Poi per ogni oggetto nell'array controllare utilizzando un for loop:
// -Se il campo prezzo è un numero, calcolare il prezzo scontato del 10% e aggiungere al libro una nuova chiave prezzoScontato contenente il prezzo scontato.
//     formula per quantità di sconto da sottrarre al prezzo: prezzo * 0.10
// -Se il campo prezzo non è un numero, aggiungere all'oggetto un messaggio personalizzato (anche come chiave) indicando "Il prezzo potrebbe non essere un numero".

// L'array su cui lavorare

// Esempio di risultato che ci si aspetta:

// Nuovo prezzo calcolato: [
//   {
//     titolo: 'Il signore degli anelli',
//     autore: 'J.R.R. Tolkien',
//     prezzo: 25,
//     prezzoScontato: 22.5
//   },
//   {
//     titolo: '1984',
//     autore: 'George Orwell',
//     prezzo: '20',
//     message: 'Il prezzo potrebbe non essere un numero'
//   },
//   {
//     titolo: 'Il piccolo principe',
//     autore: 'Antoine de Saint-Exupéry',
//     prezzo: 15,
//     prezzoScontato: 13.5
//   }
// ]

const libri = [
    { titolo: 'Il signore degli anelli', autore: 'J.R.R. Tolkien', prezzo: 25 },
    { titolo: '1984', autore: 'George Orwell', prezzo: '20' }, // Un esempio di prezzo non numero
    { titolo: 'Il piccolo principe', autore: 'Antoine de Saint-Exupéry', prezzo: 15 },
];

function applyDiscount(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray(array)) {
                reject(new Error("No array found"))

            } else {
                const newArray = []
                for (let i = 0; i < array.length; i++) {
                    if (typeof (array[i].prezzo) === "number") {
                        let discount = array[i].prezzo * 0.1;
                        let discountedPrice = array[i].prezzo - discount;
                        newArray.push({
                            ...array[i],
                            newPrice: discountedPrice
                        })
                    } else {
                        newArray.push({
                            ...array[i],
                            message: "price is not a number"
                        })

                    }
                } 
                resolve(newArray)
            }
        }, 1000)
    })
}
const num = 9
applyDiscount(num).then((data)=> {
    console.log(data)
}).catch((error)=> {
    console.log(error.message)
})