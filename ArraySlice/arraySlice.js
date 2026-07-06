let animals = [];
function onClickPush() {
    debugger;
    let Animals = document.getElementById("txtAnimal").value;
    document.getElementById("txtAnimal").value = "";
    animals.push(Animals);
    let i = 0;
    content = "";
    while (i < animals.length) {
        content += `<p>${i + 1}) ${animals[i]}</p>`
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
}
function onClickPop() {
    debugger;
    let Animals = document.getElementById("txtAnimal").value;
    document.getElementById("txtAnimal").value = "";
    animals.pop(Animals);
    let i = 0;
    content = "";
    while (i < animals.length) {
        content += `<p>${i + 1}) ${animals[i]}</p>`
        i++;
    }
    document.getElementById("divPop").innerHTML = content;
}
function onClickSlice() {
    debugger;
    let add=["panda",'kangaroo']
    let startNumber = document.getElementById("txtStart").value;
    let endNumber = document.getElementById("txtEnd").value;
    let x=animals.slice(startNumber,endNumber);
       let y=animals.splice(startNumber,endNumber,...add)
    let i = 0;
    content = "";
    while (i < animals.length) {
        content += `<p>${i+1}) ${animals[i]}</p>`
        i++;
    }
    document.getElementById("divSlice").innerHTML = content;
}



function arrayContentBinding(inputArray = []) {
    let content = "";
    i = 0;
    while (i < inputArray.length) {
        content += `<p><b>${i + 1})</b> ${inputArray[i]}</p>`
        i++;

    }
    return content;

}


