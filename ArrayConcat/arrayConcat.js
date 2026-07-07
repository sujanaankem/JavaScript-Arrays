let girls = [];
let boys = [];
function onClickGirls() {
    debugger;
    let girlsNames = document.getElementById("txtGirls").value;
    document.getElementById("txtGirls").value = "";
    girls.push(girlsNames); 
    content = "";
    for (i = 0; i < girls.length; i++) {
        content += `<p>${i + 1}.${girls[i]}</p>`;
    }
    document.getElementById("divGirls").innerHTML = `<b>Girls names:</b> ${content}`;
}
function onClickBoys() {
    debugger;
    let boysNames = document.getElementById("txtBoys").value;
    document.getElementById("txtBoys").value = "";
    boys.push(boysNames);
    content = "";
    for (j = 0; j < boys.length; j++) {
        content += `<p>${j + 1}.${boys[j]}</p>`;
    }
    document.getElementById("divBoys").innerHTML = `<b>Boys names:</b> ${content}`;
}

function onClickConcat() {
    debugger;
let all = girls.concat(boys);
 content = "";
    for (k = 0; k < all.length; k++) {
        content += `<p>${k + 1}.${all[k]}</p>`;
    }
    document.getElementById("divConcat").innerHTML = `<b>All students names:</b> ${content}`;;
}