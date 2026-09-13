function generateTable() {

    let number = document.getElementById("number").value;
    let table = document.getElementById("table");
    let error = document.getElementById("error");

    table.innerHTML = "";
    error.innerHTML = "";

    if (number === "") {
        error.innerHTML = "Please enter a number";
        return;
    }

    for (let i = 1; i <= 10; i++) {

        let result = number * i;

        table.innerHTML += `
            <div class="row">
                <div class="expression">${number} × ${i}</div>
                <div class="result">${result}</div>
            </div>
        `;
    }
}

function clearTable() {

    document.getElementById("number").value = "";
    document.getElementById("table").innerHTML = "";
    document.getElementById("error").innerHTML = "";
}