// Empty Array
let students = [];

// Add Student
function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name === ""){
        alert("Please enter a student name.");
        return;
    }

    students.push(name);

    document.getElementById("studentName").value = "";

    document.getElementById("count").innerHTML = students.length;

    alert("Student Added Successfully!");
}

// Display Students
function displayStudents(){

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for(let i = 0; i < students.length; i++){

        let li = document.createElement("li");

        li.innerHTML = students[i];

        list.appendChild(li);
    }
}

// Close Student List
function closeStudents() {

    document.getElementById("studentList").innerHTML = "";

}