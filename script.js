// Aufgabe 1

let arr = [true,false,true,false]

console.log(arr[0])

// Aufgabe 2

let obj =
{
level1:
{
param1: 12,
level2:
{
param2: 24
}
}
};

console.log(obj.level1.param1)
console.log(obj.level1.level2.param2)

// Aufgabe 4

rechner(3,7,"Summe")
rechner(3,12,"Produkt")

function rechner(zahl1,zahl2,rechenart){

        let ergebnis;

        switch (rechenart) {
            case "Summe":
                ergebnis = summe(zahl1,zahl2);
                break;
            case "Produkt":
                ergebnis = produkt(zahl1,zahl2);
                break;
            default:
                console.log("Fehler");
                break;
        }

        console.log("Das Ergebnis von " + rechenart + " lautet: " + ergebnis);

function summe(zahl1,zahl2) {
    return zahl1 + zahl2;    
}

function produkt(zahl1,zahl2) {
    return zahl1 * zahl2;    
}

        
}