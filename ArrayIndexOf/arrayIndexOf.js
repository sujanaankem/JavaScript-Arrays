let names = ["sujana","kavya","pavan","bahulika","sam","vyshnavi","likitha","jaanu","yogya","rose","shafee","ravi","raju","kiran"]
function onClickDone(){
    debugger;
    let index = document.getElementById("txtIndexOf").value;  
    document.getElementById("divIndexOf").innerHTML = `The word ${index} is at ${names.indexOf(index)}`;
}