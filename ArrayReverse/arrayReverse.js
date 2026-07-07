let value = [];
function onClickCheck(){
    let colour = document.getElementById("txtColour").value;
    document.getElementById("txtColour").value = "";
    value.push(colour);
    content ="";
    for(i=0;i<value.length;i++){
        content += `<p>${i+1}.${value[i]}</p>`;
    }
    document.getElementById("divBefore").innerHTML=`<b>Before Reverse:</b>${content}`

    value.reverse();
    reverseContent = "";
    for(i=0;i<value.length;i++){
        reverseContent += `<p>${i+1}.${value[i]}</p>`;
    }
    document.getElementById("divAfter").innerHTML=`<b>After Reverse:</b>${reverseContent}`;
    value.sort();
    sortContent = "";
    for(i=0;i<value.length;i++){
        sortContent += `<p>${i+1}.${value[i]}</p>`;
    }
    document.getElementById("divSort").innerHTML=`<b>Sort:</b>${sortContent}`;
}
