// Skriv pseudokod för det klassiska spelet "Sten sax och påse"
//Användaren får skriva in antingen (med hjälp av funktion prompt()),sten, sax eller påse. 
// Sedan slumpas "datorns" drag (sten, sax eller påse) och efter det 
// jämför med if-satser vem som vann.

// Implementera sten, sax och påse-spelet och använd ditt lösningsförslag från pseudokoden du skrivit. 
// Ni kommer behöva använda, variabler, villkor (if-satser) och funktioner.

//Funktion playRound()
//Be användaren att skriva in sitt val (sten, sax eller påse) med prompt()
//Spara användarens val i variabeln "pChoice" och skriv ut valet

//Slumpa ett av följande alternativ för datorn: "sten", "sax" eller "påse"
//Spara datorns val i variabeln "cChoice" och skriv ut det

//Skriv ut båda valen (användarens och datorns)

//Om pChoice är lika med cChoice
   // Skriv ut "Oavgjort!"

//Annars om pChoice är "sten" och cChoice är "sax"
   // Skriv ut "Spelare vinner"

//Annars om pChoice är "sax" och cChoice är "påse"
   // Skriv ut "Spelare vinner"

// Annars om pChoice är "påse" och cChoice är "sten"
   // Skriv ut "Spelare vinner"

// Annars
   // Skriv ut "Datorn vinner!

//     let random = Math.floor(Math.random() *3)
//      let cChoice = "";
//variabler
let stone = "sten";
let scissor = "sax";
let bag = "påse";

function playGame() {
// användares val
let pChoice = prompt("Välj sten, sax, eller påse");
    if (pChoice === stone) {
        console.log("Spelare valde: " + pChoice);
    } else if (pChoice === scissor) {
        console.log("Spelare valde: " + pChoice);
    } else if (pChoice === bag) {
        console.log("Spelare valde: " + pChoice);
    } else if (pChoice !== stone && pChoice !== scissor && pChoice !== bag) {
        console.log("Ogiltigt val");
        return;
    } 

    // datorns val (tricky!!)

let random = Math.floor(Math.random() *3)
let cChoice = ""
    if (random === 0) {
        cChoice = stone;
        console.log("Datorn valde: " + cChoice);
    }   else if (random === 1) {
        cChoice = scissor;
        console.log("Datorn valde: " + cChoice);
    }   else if (random === 2) {
        cChoice = bag;
        console.log("Datorn valde: " + cChoice);
    }
     //oavgjort
    if (pChoice === cChoice) {
        console.log("Oavgjort");
        return;
        }
    
    //spelare vinner
    if (pChoice === stone && cChoice === scissor) {
        console.log("Spelare vinner");
    } else if (pChoice === scissor && cChoice === bag) {
        console.log("Spelare vinner");
    } else if (pChoice === bag && cChoice === stone) {
        console.log("Spelare vinner");
    } else {console.log("Datorn vinner");
        return;
    }
}   
    //fortsätt spela
let contPlaying = true
    while (contPlaying) {
        playGame();
            let again =prompt("Vill du spela igen? ja eller nej");
        if (again === "ja") {
            contPlaying = true;
        } else if (again !== "ja") {
            contPlaying = false;
            console.log("Tack för spelet!")
        }   
    }