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
output (getSentenceArr(["Ich", "bin", "der", "coole", "Max", "Mütze","und","gehe","gern","ins","Kino"]));
function getSentenceArr(arr) {
    const Gap = " ";
    // const Punct = ".";
    let str="";
    // die eleganteste Variante
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i] + Gap; }
    return str.trim() + ".";

    // die etwas aufwändigere Variante
    // for (let i = 0; i < arr.length-1; i++) {
    //     str = str + arr[i] + Gap; }
    // return str + arr[arr.length] + ".";

    // die übliche Variante
    // for (let i = 0; i < arr.length; i++) {
    //     if (i < arr.length-1) {
    //         str = str + arr[i] + Gap;
    //     } else {
    //         str = str + arr[i] + "."
    //     }
    //      }

     // die übliche Variante mit logischem Ausdruck
    // for (let i = 0; i != arr.length; i++) {

    //     if (i < arr.length-1) {
    //         str = str + arr[i] + Gap;
    //     } else {
    //         str = str + arr[i] + "."
    //     }
    //      }

    return str;
}

// for (let i = 0; i < arr.length; i++) {
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

// let arr =  [true, false,2,3,4,5,"Ich", "bin", "der", "coole", "Max", "Mütze" ];
// for (let i = 0; i < arr.length; i++) {
//     output(arr[i]);  
// }