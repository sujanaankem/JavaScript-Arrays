let fruits = ["Orange","Apple","Banana","Pear","Guava","Papaya","Lichi","mango"]
function onClickCheck(){
    debugger;
    let index = Number(document.getElementById("txtIndex").value);
    let fruit = fruits[index];
    document.getElementById("pResult").innerHTML = `The index of ${index} is ${fruit}`;
}