let pets = []
let get = localStorage.getItem("ls_petNames");
if (get != null) {
    pets.push(get);
}
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
function onClickRemove() {
    debugger;
    let remove = localStorage.removeItem("ls_petNames");
    document.getElementById("pRemove").innerHTML = pets;
}