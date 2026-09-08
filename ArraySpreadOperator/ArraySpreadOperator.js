function showResult() {
    let fruits = ["apple", "banana", "mango"];
    let moreFruits = ["orange", "grape"];

    // Combine arrays using spread operator
    let allFruits = [...fruits, ...moreFruits];

    document.getElementById("output").innerHTML = 
        "Fruits: " + allFruits.join(", ");
}
