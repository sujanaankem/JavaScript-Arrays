let flowers = [];
let get = localStorage.getItem("ls_Flowers");
if (get !== null) {
    flowers.push(get);
}
function onClickSubmit() {
    debugger;
    let flowerName = document.getElementById("txtFlowerName").value;
    let flowerColour = document.getElementById("txtFlowerColour").value;
    let customMessageCard = document.getElementById("txtCustomMessageCard").value;
    flowers.push(flowerName);
    flowers.push(flowerColour);
    flowers.push(customMessageCard);
    localStorage.setItem("ls_Flowers", flowers);
    document.getElementById("pResult").innerHTML = flowers;
}
function onClickRemove() {
    let remove = localStorage.removeItem("ls_Flowers");
    document.getElementById("pRemove").innerHTML = flowers;
}