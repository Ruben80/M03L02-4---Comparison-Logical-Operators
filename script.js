const age = 26;
const isFemale = false;
const driverStatus = "sjaak";
const name = "Pim";
const totalAmount = 100;
if (age >= 18){
    console.log("Je mag naar binnen")}

else {
    console.log("Helaas je bent nog geen 18")
}

if (isFemale === true){
    console.log("Je mag naar binnen")
}

else {
    console.log("Helaas je bent geen vrouw!")
}

if (driverStatus === "bob") {
    console.log("Je mag naar huis rijden!")
}

else {
    console.log("Het is te gevaarlijk om terug te rijden!")
}

if (age >= 18 && age < 25){
    console.log("Je krijgt ook 50% korting op het bier!")}

else {
    console.log("Helaas geen studentenkorting!")
}

if (name === "Sarah" || name === "Bram"){
    console.log("Je krijgt een gratis biertje!")}

else {
    console.log("Helaas geen gratis biertje voor jou!")
}

if (totalAmount > 25) {
    console.log("Je krijgt gratis (vega) bitterballen!")
}

if (totalAmount > 50) {
    console.log("Je krijgt ook nog een gratis portie nachos!")
}

if (totalAmount => 100) {
    console.log("Je krijgt ook nog een gratis flesje champagne!")
}