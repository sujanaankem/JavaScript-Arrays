let array = [];
function onClickPush(){
    let numbers = Number(document.getElementById("txtNumbers").value);
    array.push(numbers);
    document.getElementById("pPush").innerHTML = array;
    document.getElementById("txtNumbers").value = "";
}

function onClickSort(){
     debugger;
    let sort = array.sort((a,b) => a-b);
    document.getElementById("pSort").innerHTML = sort;
}

function onClickLoop(){
     debugger;
    let target = 9;
    let left = 0;
    let rigth = array.length -1;
    let sum = [];
    let count = 0;
    while (left<rigth){
        sum = (array[left]+array[rigth])
        if(sum == target){
            left ++;
            rigth --;
            count ++;
        }
        else if(sum > target){
            rigth --;
        }
        else if(sum < target){
            left ++;
        }
    }
    document.getElementById("pCount").innerHTML = count;
   // document.getElementById("pSum").innerHTML = sum;
}