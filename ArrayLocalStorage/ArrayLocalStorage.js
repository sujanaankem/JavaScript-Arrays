let pets = []
function onClickSave() {
    debugger;
    let save = document.getElementById("txtPetNames").value;
    pets.push(save);
    localStorage.setItem("ls_petNames", pets);
    document.getElementById("pResultSave").innerHTML = pets;
}
function onClickLoad() {
    debugger;
    let load = localStorage.getItem("ls_petNames");
    document.getElementById("pResultLoad").innerHTML = load;
}