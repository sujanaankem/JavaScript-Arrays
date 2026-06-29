let Chocolates = [];
function onClickSearch(){
    debugger;
    let chocolate = document.getElementById("txtPush").value;
    console.log(`Original Array: ${Chocolates}`);
    Chocolates.push(chocolate);
    document.getElementById("pResult").innerHTML = `Array after the element entered: ${Chocolates.join(", ")}`;
    document.getElementById("txtPush").value = "";
}