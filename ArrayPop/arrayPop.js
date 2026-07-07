let vegitables = [];
function onClickAdd(){
    debugger;
    let favVegitables = document.getElementById("txtVegitables").value;
    document.getElementById("txtVegitables").value = "";
    vegitables.push(favVegitables);
    let i=0;
    content ="";
    while(i < vegitables.length){
     content +=`<p>${i+1}) ${vegitables[i]}</p>`;
     i++;  
    }
    document.getElementById("divAdd").innerHTML = content;
}
function onClickRemove(){
     debugger;
    let favVegitables = document.getElementById("txtVegitables").value;
    document.getElementById("txtVegitables").value = "";
    vegitables.pop(favVegitables);
    let i=0;
    content ="";
    while(i < vegitables.length){
     content +=`<p>${i+1}) ${vegitables[i]}</p>`;
     i++;  
    }
    document.getElementById("divRemove").innerHTML = content;
}
function onClickShift(){
     debugger;
    let favVegitables = document.getElementById("txtVegitables").value;
    document.getElementById("txtVegitables").value = "";
    vegitables.shift(favVegitables);
    let i=0;
    content ="";
    while(i < vegitables.length){
     content +=`<p>${i+1}) ${vegitables[i]}</p>`;
     i++;  
    }
    document.getElementById("divShif").innerHTML = content;
}
function onClickUnShift(){
     debugger;
    let favVegitables = document.getElementById("txtVegitables").value;
    document.getElementById("txtVegitables").value = "";
    vegitables.unshift(favVegitables);
    let i=0;

    content ="";
    while(i < vegitables.length){
     content +=`<p>${i+1}) ${vegitables[i]}</p>`;
     i++;  
    }
    document.getElementById("divUnShif").innerHTML = content;
}
