let array = [
                 [2,5,10],
                 [6,12,4],
                 [7,8,2]
                             ]  
function onClickCheck(){
    debugger;
    let row = document.getElementById("txtRow").value;
    let column = document.getElementById("txtColumn").value;
    let result = array[row][column];
    document.getElementById("pResult").innerHTML = result;
}

function onClickSum(){
    debugger;
    let sum = 0;
    for(i=0;i<array.length;i++){
        for(j=0;j<array[i].length;j++){
            let value = array[i][j];
            sum = sum + value;
        }
    }
    document.getElementById("pSum").innerHTML = sum;
}