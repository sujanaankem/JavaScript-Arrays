let fruits = ["Apple", "Mango", "orange", "Grapes", "Banana"]
function onClickCheck() {
    debugger;
    let answer = "";
    for (i = 0; i < fruits.length; i++) {
        answer += i + 1 + "." + fruits[i] + "<br/>";
        document.getElementById("pResult").innerHTML = `Fruits names : ${answer} `
    }

}