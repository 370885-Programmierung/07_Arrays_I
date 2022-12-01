// Aufgabe 1

let testArr = ["Str1","Str2","Str3","Str4"]

console.log(testArr[testArr.length-1])

// Aufgabe 2

var struc ={
    level1:
    {   

 
        level2:
        {
        param1: 3.14,
        param2: 10.01
        }
    }
};

console.log(struc.level1.level2.param1)
console.log(struc.level1.level2.param2)

// Aufgabe 4

rechner(3,7,"Differenz")
rechner(3,12,"Addition")

function rechner(zahl1,zahl2,rechenart){

        let ergebnis;

        switch (rechenart) {
            case "Addition":
                ergebnis = zahl1 + zahl2;
                break;
            case "Differenz":
                ergebnis = zahl1 - zahl2;
                break;
            default:
                console.log("Fehler");
                break;
        }

        console.log("Das Ergebnis lautet: " + ergebnis);
}