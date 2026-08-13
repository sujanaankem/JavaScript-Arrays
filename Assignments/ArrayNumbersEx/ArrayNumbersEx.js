let numbers = [];
function onClickSend() {
    debugger;
    let evenNumber = parseInt(document.getElementById("txtNumbers").value);
    if (evenNumber % 2 == 0) {
        if (evenNumber !== 2) {
            numbers.push(evenNumber);
        }
    }
    document.getElementById("pResult").innerHTML = numbers;
}