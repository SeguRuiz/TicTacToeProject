//posiciones
//0
let P0_0 = document.getElementById("P0_0");
let P0_1 = document.getElementById("P0_1");
let P0_2 = document.getElementById("P0_2");
console.log(P0_0, P0_1, P0_2);
//1
let P1_0 = document.getElementById("P1_0");
let P1_1 = document.getElementById("P1_1");
let P1_2 = document.getElementById("P1_2");
console.log(P1_0, P1_1, P1_2);
//2
let P2_0 = document.getElementById("P2_0");
let P2_1 = document.getElementById("P2_1");
let P2_2 = document.getElementById("P2_2");
console.log(P1_0, P1_1, P1_2);
//Matriz de pruebas
let TicTacMatriz = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

//Reflejo de valores al principal
//Fila 0
P0_0.innerHTML = TicTacMatriz[0][0];
P0_1.innerHTML = TicTacMatriz[0][1];
P0_2.innerHTML = TicTacMatriz[0][2];
//Fila 1
P1_0.innerHTML = TicTacMatriz[1][0];
P1_1.innerHTML = TicTacMatriz[1][1];
P1_2.innerHTML = TicTacMatriz[1][2];
//Fila 2
P2_0.innerHTML = TicTacMatriz[2][0];
P2_1.innerHTML = TicTacMatriz[2][1];
P2_2.innerHTML = TicTacMatriz[2][2];
//tocar coordenadas accion
//fila 0
function tocarP0_0() {
  if (TicTacMatriz[0][0] == "") {
    TicTacMatriz[0][0] = "x";
    P0_0.innerHTML = TicTacMatriz[0][0];
    console.log(TicTacMatriz)
  }
}

function tocarP0_1() {
  if (TicTacMatriz[0][1] == "") {
    TicTacMatriz[0][1] = "x";
    P0_1.innerHTML = TicTacMatriz[0][1];
    console.log(TicTacMatriz)
  }
}

function tocarP0_2() {
  if (TicTacMatriz[0][2] == "") {
    TicTacMatriz[0][2] = "x";
    P0_2.innerHTML = TicTacMatriz[0][2];
    console.log(TicTacMatriz)
  }
}
//fila 1
function tocarP1_0() {
  if (TicTacMatriz[1][0] == "") {
    TicTacMatriz[1][0] = "x";
    P1_0.innerHTML = TicTacMatriz[1][0];
    console.log(TicTacMatriz)
  }
}

function tocarP1_1() {
  if (TicTacMatriz[1][1] == "") {
    TicTacMatriz[1][1] = "x";
    P1_1.innerHTML = TicTacMatriz[1][1];
    console.log(TicTacMatriz)
  }
}

function tocarP1_2() {
  if (TicTacMatriz[1][2] == "") {
    TicTacMatriz[1][2] = "x";
    P1_2.innerHTML = TicTacMatriz[1][2];
    console.log(TicTacMatriz)
  }
}
//fila 2
function tocarP2_0() {
  if (TicTacMatriz[2][0] == "") {
    TicTacMatriz[2][0] = "x";
    P2_0.innerHTML = TicTacMatriz[2][0];
    console.log(TicTacMatriz)
  }
}

function tocarP2_1() {
  if (TicTacMatriz[2][1] == "") {
    TicTacMatriz[2][1] = "x";
    P2_1.innerHTML = TicTacMatriz[2][1];
    console.log(TicTacMatriz)
  }
}

function tocarP2_2() {
  if (TicTacMatriz[2][2] == "") {
    TicTacMatriz[2][2] = "x";
    P2_2.innerHTML = TicTacMatriz[2][2];
    console.log(TicTacMatriz)
  }
}
