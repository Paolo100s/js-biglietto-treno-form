// variabili
let buttonConfirm, userName ,km, age, price, totalPrice;
const priceKm = 0.21;

// generatore
buttonConfirm = document.getElementById("inputConfirm");
buttonConfirm.addEventListener("click",

    function() {

        // input
        userName = document.getElementById("inputName").value;
        km = parseInt (document.getElementById("inputKm").value);
        age = document.getElementById("inputAge").value;

        // prezzo in base ai km
        price = (km * priceKm);

        // eventuale sconto
        if (age = "minorenne") {
            totalPrice = price - (price / 100 * 20);
        } else if (age = "over65") {
            totalPrice = price - (price / 100 * 40);
        } else {
            totalPrice = price
        }
    }

)

    console.log("nome:", userName);
    console.log(km);
    console.log(age);



// prezzo finale
message = 
`
${totalPrice.toFixed(2)} ${"Euro"}
`

// output
document.getElementById("biglietto").innerHTML = "Il prezzo del biglietto è " + message