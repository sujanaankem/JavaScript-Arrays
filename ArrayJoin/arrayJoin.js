let colours = [];
function onClickJoin(){
    let name = document.getElementById("txtColours").value;
    colours.push(name);
    document.getElementById("txtColours").value = "";
    document.getElementById("divJoin").innerHTML = `${colours.join(", ")}`
}