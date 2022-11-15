"use strict";

/* Die Satzbau-Maschine | Arrays */



//*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze.";
// output(getSentence("Ich", "bin", "der", "coole", "Max", "Mütze"));
function getSentence(word1,word2,word3,word4,word5,word6,) {
    const Gap = " ";
    const Punct = ".";
    let str = 
        word1 + Gap +
        word2 + Gap +
        word3 + Gap +
        word4 + Gap +
        word5 + Gap +
        word6 +
        Punct;
    return str;
}


/*** 01. Funktionalität mit Array */
// output (getSentenceArr(["Ich", "bin", "der", "coole", "Max", "Mütze"]));
function getSentenceArr(arr) {
    const Gap = " ";
    const Punct = ".";
    let str =   arr[0] + Gap +
                arr[1] + Gap +
                arr[2] + Gap +
                arr[3] + Gap +
                arr[4] + Gap +
                arr[5] +
            Punct;
    return str;
}

for (let i = 1; i < 10; i+2) {
    output("index i = " + i);  
}

// for (let i = 0; i <arr.length>; i--) {
//     output(arr[1] + Gap +);  
// }

// Parameter in ()
// Codeblöcke in {}
// Arrays in []

// Modul: Ausgabe in Konsole : Test
// output("hi") 
function output(outputStr) {
    console.log(outputStr);
}

// o2 Theory array
// let arr;
// arr = []; // literale Schreibweise im Gegensatz zu arr = new Array;
// arr = [true, false,2,3,4,5,"Ich", "bin", "der", "coole", "Max", "Mütze" ]; //Arrays können mit beliebigen Datentypen befüllt werden
// output (arr);
// output (arr.length);
// output (arr[0]); // Konkrete Ausgabe eines Index. Index eines Arrays beginnt bei 0 und gibt damit den ersten Wert aus
// output (arr[arr.length-1]); // Allgemeine Form den z.B. letzten Wert eines Arrays auszugeben
