class Personnage {

    constructor(firstName, mentalHealth) {
        this.firstName = firstName;
        this.mentalHealth = mentalHealth;
    }



}

let personnage = new Personnage("Sam", 10);
let listMusics = ["Anissa - Wejdene", "Gun and Roses - Welcome to the jungle", "NTM - ma Benz", "Booba - Pitbull", "Golmann - je te donne"];

let trajet = 30;
let nbrChangements = 0;
while(trajet > 0) {

    let musicEnEcoute = listMusics[Math.floor(Math.random() * 4)];
    console.log("Je passe un feu rouge, la musique à la radio va changer !");

    console.log("La musique jouée au feu rouge est : " + musicEnEcoute);

    if(musicEnEcoute === "Anissa - Wejdene") {
        console.log("Hey merde boris, on va saigner des oreilles!");
        console.log("Je change de taxi !");
        nbrChangements++;
        personnage.mentalHealth -= 1;

        if(personnage.mentalHealth <= 0) {
            alert("C'était le passage de trop, votre tête a pétée !");
            break;
        }

    }

    trajet--;
    console.log("Il vous reste " + trajet + "feux à franchir !");

}

if(personnage.mentalHealth > 0) {
    console.log("Votre tête a chauffée mais a tenu bon au bout de " + nbrChangements + " changements ! Fuck Wejdene !");
}