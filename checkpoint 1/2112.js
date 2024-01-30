// ``
const studenti = [
    { nome: "valentina", cognome: "li", costoIscrizione: 500 },
    { nome: "melissa", cognome: "mastro", costoIscrizione: "500" },
    { nome: "arianna", cognome: "giaccari", costoIscrizione: 500 }
];

function retrieveData(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(arr)) {
                resolve(arr)
            } else {
                reject(new Error("insert array"))
            }
        }, 3000);
    })
};

const check = retrieveData(studenti)
console.log(check)

retrieveData(studenti)
    .then((data) => {
        console.log(`la tua struttura dati è:`, data)

        const newArray = data.map((element) => {

            if (typeof element.costoIscrizione === "number") {
                const prezzoScontato = element.costoIscrizione * 0.8
                return {
                    ...element,
                    prezzoScontato: prezzoScontato
                }

            } else {
                return {
                    ...element,
                    message: "Il prezzo di iscrizione non è un numero"
                }
            }
        })

        console.log(newArray)
    })
    .catch((error) => { console.log(error.message) })

