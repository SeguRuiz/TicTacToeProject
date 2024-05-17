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

let cambiosJugador = "o";
let estadoJuego = "jugando";

//Reflejo de valores al principal
//Fila 0

//Fila 1

//Fila 2

//tocar coordenadas accion
//fila 0

function tocarP0_0() {
  for (let index = 0; index < 3; index++) {
    const empate = TicTacMatriz[index][0];
    let contador = 0;

    console.log(empate);
  }
  if (estadoJuego == "jugando") {
    //Si no hay nada en ese espacio pon algo
    if (TicTacMatriz[0][0] == "") {
      //alterna entre o y x para referirse a los turnos de los jugadores
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      // hara que el valor del cambio de variable este en esa posicion de la matriz y por ende tambien el del html de esa posicion(ya que los dos estan ligados)
      TicTacMatriz[0][0] = cambiosJugador;
      P0_0.innerHTML = TicTacMatriz[0][0];
      console.log(TicTacMatriz);

      /*if (
        TicTacMatriz[0][0] == 'x' &&
        TicTacMatriz[0][1] == "x" &&
        TicTacMatriz[0][2] == "x"
      ) {
        estadoJuego = "ganador";
        console.log("LA X DEVORO!!!!111!!!");
        console.log(estadoJuego);
      }*/

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP0_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[0][1] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[0][1] = cambiosJugador;
      P0_1.innerHTML = TicTacMatriz[0][1];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP0_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[0][2] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[0][2] = cambiosJugador;
      P0_2.innerHTML = TicTacMatriz[0][2];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}
//fila 1
function tocarP1_0() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][0] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[1][0] = cambiosJugador;
      P1_0.innerHTML = TicTacMatriz[1][0];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP1_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][1] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[1][1] = cambiosJugador;
      P1_1.innerHTML = TicTacMatriz[1][1];
      console.log(TicTacMatriz);
      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP1_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][2] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[1][2] = cambiosJugador;
      P1_2.innerHTML = TicTacMatriz[1][2];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}
//fila 2
function tocarP2_0() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][0] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[2][0] = cambiosJugador;
      P2_0.innerHTML = TicTacMatriz[2][0];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP2_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][1] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[2][1] = cambiosJugador;
      P2_1.innerHTML = TicTacMatriz[2][1];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

function tocarP2_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][2] == "") {
      if (cambiosJugador == "o") {
        cambiosJugador = "x";
      } else {
        cambiosJugador = "o";
      }
      TicTacMatriz[2][2] = cambiosJugador;
      P2_2.innerHTML = TicTacMatriz[2][2];
      console.log(TicTacMatriz);

      if (
        fila1(TicTacMatriz, cambiosJugador) ||
        fila2(TicTacMatriz, cambiosJugador) ||
        fila3(TicTacMatriz, cambiosJugador) ||
        columna1(TicTacMatriz, cambiosJugador) ||
        columna2(TicTacMatriz, cambiosJugador) ||
        columna3(TicTacMatriz, cambiosJugador) ||
        diagonal(TicTacMatriz, cambiosJugador) ||
        diagonal2(TicTacMatriz, cambiosJugador)
      ) {
        estadoJuego = "ganador";
        console.log(cambiosJugador + " DEVOROOOO!!!!");
        console.log(estadoJuego);
      }
    }
  }
}

//fors recoren filas en busca de gane-filas
function fila1(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[0][index] == cambiosJugador) {
      console.log(matriz[0][index]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}

function fila2(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[1][index] == cambiosJugador) {
      console.log(matriz[1][index]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}

function fila3(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[2][index] == cambiosJugador) {
      console.log(matriz[2][index]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}
//fors recoren filas en busca de gane-columnas
function columna1(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][0] == cambiosJugador) {
      console.log(matriz[index][0]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}

function columna2(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][1] == cambiosJugador) {
      console.log(matriz[index][1]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}

function columna3(matriz, cambiosJugador) {
  console.log(matriz, cambiosJugador);
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][2] == cambiosJugador) {
      console.log(matriz[index][2]);
      cont++;
    }
  }

  if (cont == 3) {
    console.log(cont);
    return true;
  } else {
    return false;
  }
}
// fors compara diagonales
function diagonal(matriz, cambiosJugador) {
  if (
    matriz[0][0] == cambiosJugador &&
    matriz[1][1] == cambiosJugador &&
    matriz[2][2] == cambiosJugador
  ) {
    return true;
  } else {
    return false;
  }
}

function diagonal2(matriz, cambiosJugador) {
  if (
    matriz[0][2] == cambiosJugador &&
    matriz[1][1] == cambiosJugador &&
    matriz[2][0] == cambiosJugador
  ) {
    return true;
  } else {
    return false;
  }
}
//empate
