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
    let Animals = document.getElementById("txtAnimal").value;
    let startNumber = document.getElementById("txtStart").value;
    let EndNumber = document.getElementById("txtEnd").value;
    document.getElementById("txtAnimal").value = "";
    animals.slice(Animals);
    let i = startNumber;
    content = "";
    while (i < EndNumber) {
        content += `<p>${i+1}) ${animals[i]}</p>`
        i++;
    }
    document.getElementById("divSlice").innerHTML = content;
}
