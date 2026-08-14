let marks = [];
function onClickSubmit() {
    debugger;
    let telugu = document.getElementById("txtTelugu").value;
    marks.push(telugu);
    let hindi = document.getElementById("txtHindi").value;
    marks.push(hindi);
    let english = document.getElementById("txtEnglish").value;
    marks.push(english);
    let maths = document.getElementById("txtMaths").value;
    marks.push(maths);
    let science = document.getElementById("txtScience").value;
    marks.push(science);
    let social = document.getElementById("txtSocial").value;
    marks.push(social);

    let result = [];
    for (i = 0; i < marks.length; i++) {
        if ((marks[i] >= 90) && (marks[i] <= 100)) {
            result.push("A+");
        } else if ((marks[i] >= 80) && (marks[i] <= 90)) {
            result.push("A");
        } else if ((marks[i] >= 70) && (marks[i] <= 80)) {
            result.push("B+");
        } else if ((marks[i] >= 60) && (marks[i] <= 70)) {
            result.push("B");
        } else if ((marks[i] >= 50) && (marks[i] <= 60)) {
            result.push("C");
        } else if ((marks[i] >= 40) && (marks[i] <= 50)) {
            result.push("D");
        } else {
            result.push("FAIL");
        }
    }
    document.getElementById("pTelugu").innerHTML = `Telugu : ${result[0]}`;
    document.getElementById("pHindi").innerHTML = `Hindi : ${result[1]}`;
    document.getElementById("pEnglish").innerHTML = `English : ${result[2]}`;
    document.getElementById("pMaths").innerHTML = `Maths : ${result[3]}`;
    document.getElementById("pScience").innerHTML = `Science : ${result[4]}`;
    document.getElementById("pSocial").innerHTML = `Social : ${result[5]}`;
}