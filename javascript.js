// Event set up
const clearBtn = document.getElementById("clear");
const newBtn = document.getElementById("new");
const color = document.getElementById("color");
clearBtn.addEventListener("click", clear);
newBtn.addEventListener("click", newCanvas);
color.addEventListener("change", changeColor);

const SIZE = 600;
const DEFAULT_ROW = 16;
createCanvas(DEFAULT_ROW);


/* Function Definitions */

function createCanvas(rows) {
    const main = document.querySelector(".container");
    let squareSize = SIZE / rows;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList += "row";
        for (let j = 0; j < rows; j++) {
            let div = document.createElement("div");
            div.addEventListener("mouseover", colorSquare);
            div.classList += "square";
            div.style.width = `${squareSize}px`
            div.style.height = `${squareSize}px`
            row.appendChild(div);
        }
        main.appendChild(row);
    }
}

function colorSquare() {
    if (!this.classList.contains("colored"))
        this.classList += " colored";
}

function newCanvas() {
    let rows = prompt("Number of rows/columns:", "16");
    if (isNaN(rows) || rows <= 0)
        return;
    deleteCanvas();
    createCanvas(rows);
}

function changeColor() {
    document.documentElement.style.setProperty("--sel-color", this.value);
}

function deleteCanvas() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
}

function clear() {
    const divs = document.querySelectorAll(".colored");
    divs.forEach(div => div.classList.remove('colored'));
}