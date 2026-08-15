let array = [];
function onClickPush(){
    debugger;
    let numbers = Number(document.getElementById("txtNumbers").value);
    array.push(numbers);
    document.getElementById("pPush").innerHTML = array;
    document.getElementById("txtNumbers").value = "";
}

function onClickSort(){
    let sort = array.sort((a,b) => a-b);
    document.getElementById("pSort").innerHTML = sort;
}

function onClickLoop(){
    let target = 9;
    let left = 0;
    let rigth = array.length -1;
    let sumCount = [];
    while {
        
    }
}