let LetterA = [];
let LetterE = [];
let LetterI = [];
let LetterO = [];
let LetterU = [];
let LetterConsonants = [];
function onClickCheck() {
    debugger;
    let word = document.getElementById("txtWord").value;
    if (word.startsWith("a")) {
        LetterA.push(word);
        document.getElementById("pLetterA").innerHTML = `Word starts with A: ${LetterA.join(", ")}`;
    }


    else if (word.startsWith("e")) {
        LetterE.push(word);
        document.getElementById("pLetterE").innerHTML = `Word starts with E: ${LetterE.join(", ")}`;
    }


    else if (word.startsWith("i")) {
        LetterI.push(word);
        document.getElementById("pLetterI").innerHTML = `Word starts with I: ${LetterI.join(", ")}`;
    }


    else if (word.startsWith("o")) {
        LetterO.push(word);
        document.getElementById("pLetterO").innerHTML = `Word starts with O: ${LetterO.join(", ")}`;
    }


    else if (word.startsWith("u")) {
        LetterU.push(word);
        document.getElementById("pLetterU").innerHTML = `Word starts with U: ${LetterU.join(", ")}`;
    }


    else {
        LetterConsonants.push(word);
        document.getElementById("pLetterConsonants").innerHTML = `Word starts with Consonants: ${LetterConsonants.join(", ")}`;
    }

}

