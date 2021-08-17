let intento = 0;

function inicio() {
    let x = 100;
    let y = 100;
    document.getElementById("1").setAttribute("x", x);
    document.getElementById("1").setAttribute("y", y);
    document.getElementById("2").setAttribute("x", "200");
    document.getElementById("2").setAttribute("y", y);
    document.getElementById("3").setAttribute("x", "300");
    document.getElementById("3").setAttribute("y", y);
    y = y + 100;
    document.getElementById("4").setAttribute("x", x);
    document.getElementById("4").setAttribute("y", y);
    document.getElementById("5").setAttribute("x", y);
    document.getElementById("5").setAttribute("y", y);
    document.getElementById("6").setAttribute("x", "300");
    document.getElementById("6").setAttribute("y", y);
    y = y + 100;
    document.getElementById("7").setAttribute("x", x);
    document.getElementById("7").setAttribute("y", y);
    document.getElementById("8").setAttribute("x", "200");
    document.getElementById("8").setAttribute("y", y);
    document.getElementById("9").setAttribute("x", y);
    document.getElementById("9").setAttribute("y", y);
    intento = 0;
    document.getElementById("try").innerHTML = intento;
    alert("¿Porque te rendiste? :(, a la próxima lo haras mejor solo intenta");
    // for (let index = 0; index < 9; index++) {
    //     if (index < 4) {
    //         alert("Aaqui");
    //         document.getElementById("2").setAttribute("y", y);
    //         alert("Aaqui" + index);
    //         document.getElementById("2").setAttribute("x", x);
    //         x = x + 100;
    //         alert(x);
    //     } else if (index > 4 && index < 7) {
    //         alert("no");
    //     }
    // }
}

function Correr(id) {
    valida = 0;
    let PosNX = document.getElementById("9").getAttribute("x");
    let PosNY = document.getElementById("9").getAttribute("y");
    let distanciaX = 0;
    let distanciaY = 0;
    let PosX = document.getElementById(id).getAttribute("x");
    let PosY = document.getElementById(id).getAttribute("y");
    distanciaX = PosX - PosNX;
    distanciaY = PosY - PosNY;
    if (PosX == PosNX) {
        if (distanciaY == -100 || distanciaY == 100) {
            document.getElementById("9").setAttribute("y", PosY);
            document.getElementById(id).setAttribute("y", PosNY);

            cuenta();
            valida();
        }
    } else if (PosY == PosNY) {
        if (distanciaX == -100 || distanciaX == 100) {
            document.getElementById("9").setAttribute("x", PosX);
            document.getElementById(id).setAttribute("x", PosNX);

            cuenta();
            valida();
        }
    }
}

function cuenta() {
    intento = intento + 1;
    document.getElementById("try").innerHTML = intento;
}

// const piezas = document.querySelector("g");

// piezas.forEach(item => {
//     item.addEventListener('click', (event) => {
//         const target = event.target;
//         const fila = target.getAttribute("fila");
//         const targetId = target.id;
//         alert(target + fila)
//     })
// })
// const inicio = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ]
// const SOLVED_MAP = [
//     ["1", "2", "3"],
//     ["4", "5", "6"],
//     ["7", "8", "0"]
// ]
// const puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 0];
// for (let index = 0; index < puzzle.length; index++) {
//     const xPos = Math.floor(Math.random() * 3 + 1);
//     const yPos = Math.floor(Math.random() * 3 + 1);
//     const pieza = puzzle[index];
//     if (inicio[xPos][yPos]) {
//         generateMap();
//     } else {
//         inicio[xPos][yPos] = pieza;
//     }
// }