let Five = [];
let Three = [];
let Remaining = [];
function onClickCheck() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    if (number % 5 == 0) {
        Five.push(number)
        let five = document.getElementById("divFive");
        five.innerHTML = `Divisible by 5: ${Five.join(", ")}`;
    }
    if (number % 3 == 0) {
        Three.push(number)
        let three = document.getElementById("divThree");
        three.innerHTML = `Divisible by 3: ${Three.join(", ")}`;
    }
else{
    Remaining.push(number)
   let remaining = document.getElementById("divRemaining");
    remaining.innerHTML = `Divisible by remaining numbers: ${Remaining.join(", ")}`; 
}
}