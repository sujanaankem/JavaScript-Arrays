let shops = [];
function onClickAddShopName(){
    debugger;
    let addName = document.getElementById("txtShopName").value;
    shops.push(addName);
    document.getElementById("txtShopName").value ="";
    let i=0;
   content ="";
    while(i<shops.length){
        content += `<p>${i+1}.${shops[i]}</p>`;
        i++;
    }
    document.getElementById("pResult").innerHTML = content;
}