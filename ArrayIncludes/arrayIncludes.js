let cities = ["eluru", "delhi", "hyderabad", "mumbai", "chennai", "pune", "vishakapatnam", "vijayawada","agra","surat"];
function onClickCheck() {
    debugger;
    let cityNames = document.getElementById("txtIncludes").value.toLowerCase();
    let indexOf = document.getElementById("txtIndexOf").value;
    if (cities.includes(cityNames)) {
        document.getElementById("divIncludes").innerHTML = `The city <span style="color:green; font-weight:bold;"> ${cityNames}</span> is there in the list: True`
    } else {
        document.getElementById("divIncludes").innerHTML = `The city <span style="color:red; font-weight:bold;">${cityNames}</span> is not there in the list: false`
    }  
    if(cityNames.includes(indexOf)){
        document.getElementById("divIndexOf").innerHTML = `The alphabet "${indexOf}" is in the word : ${cityNames} at the index of ${cityNames.indexOf(indexOf)}`;
    } else{
         document.getElementById("divIndexOf").innerHTML = `The alphabet "${indexOf}" is not in the word :Undefine`;  
    }
}


function onClickIndexCheck(){
    debugger;
    let word = document.getElementById("txtWord").value;
    let alpha = document.getElementById("txtIndex").value;
    if(word.includes(alpha)){
    document.getElementById("divIndex").innerHTML = `The alphabet "${alpha}" is in the word : ${word} at the index of ${word.indexOf(alpha)}`;   
    }else{
     document.getElementById("divIndex").innerHTML = `The alphabet "${alpha}" is not in the word :Undefine`;   
    }
}