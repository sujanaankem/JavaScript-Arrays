// Array to store students
let attendance = [];

const studentName = document.getElementById("studentName");
const presentBtn = document.getElementById("presentBtn");
const attendanceList = document.getElementById("attendanceList");
const count = document.getElementById("count");

presentBtn.addEventListener("click", () => {

    let name = studentName.value;

    if(name === ""){
        alert("Please enter student name");
        return;
    }

    // Add name into array
    attendance.push(name);

    displayStudents();

    studentName.value = "";
});

// Display students
function displayStudents(){

    attendanceList.innerHTML = "";

    for(let student of attendance){

        let li = document.createElement("li");
        li.textContent = student;

        attendanceList.appendChild(li);
    }

    count.textContent = attendance.length;
}
