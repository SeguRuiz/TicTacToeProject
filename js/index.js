//posiciones
//0
let P0_0 = document.getElementById("P0_0");
let P0_1 = document.getElementById("P0_1");
let P0_2 = document.getElementById("P0_2");

//1
let P1_0 = document.getElementById("P1_0");
let P1_1 = document.getElementById("P1_1");
let P1_2 = document.getElementById("P1_2");

//2
let P2_0 = document.getElementById("P2_0");
let P2_1 = document.getElementById("P2_1");
let P2_2 = document.getElementById("P2_2");

//info al user
let infoWin = document.getElementById("infoP");
//btn restart
let btnRestart = document.getElementById("btnRestart");
//restart informacion
function restart() {
  document.getElementById("restartSvg").style.visibility = "visible";
  document.getElementById("restartSvg").addEventListener("click", () => {
    window.location.reload();
  });
}
//Matriz de pruebas

let TicTacMatriz = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let hola = 0;
let hola2 = 0;
let cambiosJugador = "O";
let estadoJuego = "jugando";
//movimientos del bot
let cajasHtml = [P0_0, P0_1, P0_2, P1_0, P1_1, P1_2, P2_0, P2_1, P2_2];
let arrayMatriz = ["", "", "", "", "", "", "", "", ""];

// ganeFila1(arrayMatriz);
// ganeFila2(arrayMatriz);
// ganeFila3(arrayMatriz);
// ganeColumna1(arrayMatriz);

console.log(TicTacMatriz);
for (let x = 0; x < cajasHtml.length; x++) {
  let espacios = cajasHtml[x];
  espacios.addEventListener("click", (o) => {
    if (estadoJuego == "jugando") {
      if (espacios.innerHTML == "") {
        cambiosJugador = "X";
        infoCambio(cambiosJugador);
        espacios.innerHTML = cambiosJugador;

        if (
          ganeFila1(cajasHtml, cambiosJugador).gano ||
          ganeFila2(cajasHtml, cambiosJugador).gano ||
          ganeFila3(cajasHtml, cambiosJugador).gano ||
          ganeColumna1(cajasHtml, cambiosJugador).gano ||
          ganeColumna2(cajasHtml, cambiosJugador).gano ||
          ganeColumna3(cajasHtml, cambiosJugador).gano ||
          ganeDiag(cajasHtml, cambiosJugador).gano ||
          ganeDiag2(cajasHtml, cambiosJugador).gano
        ) {
          estadoJuego = "ganador";
          infoWin.innerHTML = cambiosJugador + " es el ganador!";
          //console.log(pos(cajasHtml, cambiosJugador));
          tresEnRaya(cajasHtml, cambiosJugador);
          setTimeout(restart, 1000);
        } else {
          if (empateArray(cajasHtml)) {
            infoWin.innerHTML = "Hubo un empate";

            setTimeout(restart, 1000);
          } else {
            estadoJuego = "Bot";
            setTimeout(
              bot,
              1000,
              cajasHtml,
              cambiosJugador,
              pos(cajasHtml, cambiosJugador)
            );
            setTimeout(estado, 1000);
          }
        }
      }
    }
  });
}

// //funciones individuales
// function tocarP0_0() {
//   //Los toques solo ocurriran si el estado de juego siguen en "jugando" asi como el cambio de O a X
//   //Esto para evitar errores como que al ganar se pueda seguir jugando
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[0][0] == "") {
//       //evaluara si es el campo tocado esta en blanco en la matriz, esto para evitar un error de que
//       //al tocar un campo ya utilizado el bot juegue o se cambie de O a X y viceversa
//       cambiosJugador = "X";
//       //cuando el jugador toque cambiara a X
//       infoCambio(cambiosJugador);
//       //InfoCambio muestra en el texto informativo si el turno del jugador ocurre o el del bot

//       TicTacMatriz[0][0] = cambiosJugador;
//       //Luego igualo cambios jugador(que son las X) a la matriz principal, que su contenido se muestre
//       //En el campo tocado(TicTacMatriz)
//       P0_0.innerHTML = TicTacMatriz[0][0];
//       //Luego el innerHtml del campo tocado sera igual al de la matriz asi la informacion de la matriz sera
//       //reflejado al espacio indicado en el html del DOM

//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//       //Luego siguen las comprobaciones de gane
//       //Primeramente comprobara los ganes en caso de que haya un gane con tablero lleno y tome de primero el gane
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         //si hay un gane el estado de juego pasara a "ganador" por ende los toques quedan bloqueados
//         //Y asi no se podra jugar cuando haya un gane.

//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//         //Luego mostrara el gane
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//     }
//   }
// }

// function tocarP0_1() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[0][1] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[0][1] = cambiosJugador;
//       P0_1.innerHTML = TicTacMatriz[0][1];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

// function tocarP0_2() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[0][2] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[0][2] = cambiosJugador;
//       P0_2.innerHTML = TicTacMatriz[0][2];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }
// //fila 1
// function tocarP1_0() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[1][0] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[1][0] = cambiosJugador;
//       P1_0.innerHTML = TicTacMatriz[1][0];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

// function tocarP1_1() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[1][1] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[1][1] = cambiosJugador;
//       P1_1.innerHTML = TicTacMatriz[1][1];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

// function tocarP1_2() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[1][2] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[1][2] = cambiosJugador;
//       P1_2.innerHTML = TicTacMatriz[1][2];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }

//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }
// //fila 2
// function tocarP2_0() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[2][0] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[2][0] = cambiosJugador;
//       P2_0.innerHTML = TicTacMatriz[2][0];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }
//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

// function tocarP2_1() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[2][1] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[2][1] = cambiosJugador;
//       P2_1.innerHTML = TicTacMatriz[2][1];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }

//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

// function tocarP2_2() {
//   if (estadoJuego == "jugando") {
//     if (TicTacMatriz[2][2] == "") {
//       cambiosJugador = "X";
//       infoCambio(cambiosJugador);
//       TicTacMatriz[2][2] = cambiosJugador;
//       P2_2.innerHTML = TicTacMatriz[2][2];
//       if (
//         fila1(TicTacMatriz, cambiosJugador) ||
//         fila2(TicTacMatriz, cambiosJugador) ||
//         fila3(TicTacMatriz, cambiosJugador) ||
//         columna1(TicTacMatriz, cambiosJugador) ||
//         columna2(TicTacMatriz, cambiosJugador) ||
//         columna3(TicTacMatriz, cambiosJugador) ||
//         diagonal(TicTacMatriz, cambiosJugador) ||
//         diagonal2(TicTacMatriz, cambiosJugador)
//       ) {
//         estadoJuego = "ganador";
//         infoWin.innerHTML = cambiosJugador + " es el ganador!";
//         setTimeout(restart, 1000);
//         tresEnRaya(TicTacMatriz, cambiosJugador);
//       } else {
//         if (empate(TicTacMatriz)) {
//           infoWin.innerHTML = "Hubo un empate";
//           setTimeout(restart, 1000);
//         } else {
//           estadoJuego = "Bot";
//           setTimeout(
//             bot,
//             1000,
//             TicTacMatriz,
//             cambiosJugador,
//             soloAgarreCamposEnBlanco(TicTacMatriz)
//           );
//           setTimeout(estado, 1000);
//         }
//       }

//       //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
//     }
//   }
// }

////////////////////////////////////////////
function infoCambio(cambiosJugador) {
  if (cambiosJugador == "O") {
    infoWin.innerHTML = "Turno de X";
  } else {
    infoWin.innerHTML = "Turno de O";
  }
}

// //fors recoren filas en busca de gane-filas
// function fila1(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[0][index] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function fila2(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[1][index] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function fila3(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[2][index] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //fors recoren filas en busca de gane-columnas
// function columna1(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[index][0] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function columna2(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[index][1] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function columna3(matriz, cambiosJugador) {
//   let cont = 0;
//   for (let index = 0; index < 3; index++) {
//     if (matriz[index][2] == cambiosJugador) {
//       cont++;
//     }
//   }

//   if (cont == 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // fors compara diagonales
// function diagonal(matriz, cambiosJugador) {
//   if (
//     matriz[0][0] == cambiosJugador &&
//     matriz[1][1] == cambiosJugador &&
//     matriz[2][2] == cambiosJugador
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function diagonal2(matriz, cambiosJugador) {
//   if (
//     matriz[0][2] == cambiosJugador &&
//     matriz[1][1] == cambiosJugador &&
//     matriz[2][0] == cambiosJugador
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //empate
// function empate(matriz) {
//   if (
//     matriz[0][0] != "" &&
//     matriz[0][1] != "" &&
//     matriz[0][2] != "" &&
//     matriz[1][0] != "" &&
//     matriz[1][1] != "" &&
//     matriz[1][2] != "" &&
//     matriz[2][0] != "" &&
//     matriz[2][1] != "" &&
//     matriz[2][2] != ""
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
//funcion bot
function bot(array, cambiosJugador, coordenadas) {
  estadoJuego = "Bot";
  cambiosJugador = "O";

  if (estadoJuego == "Bot") {
    infoCambio(cambiosJugador);
    array[coordenadas].innerHTML = cambiosJugador;
    

    if (
      ganeFila1(cajasHtml, cambiosJugador) ||
      ganeFila2(cajasHtml, cambiosJugador) ||
      ganeFila3(cajasHtml, cambiosJugador) ||
      ganeColumna1(cajasHtml, cambiosJugador) ||
      ganeColumna2(cajasHtml, cambiosJugador) ||
      ganeColumna3(cajasHtml, cambiosJugador) ||
      ganeDiag(cajasHtml, cambiosJugador) ||
      ganeDiag2(cajasHtml, cambiosJugador)
    ) {
      estadoJuego = "ganador";
      infoWin.innerHTML = cambiosJugador + " es el ganador!";
      console.log(pos(cajasHtml, cambiosJugador));

      setTimeout(restart, 1000);
      tresEnRaya(array, cambiosJugador);
    } else {
      if (empateArray(cajasHtml)) {
        infoWin.innerHTML = "Hubo un empate";
        setTimeout(restart, 1000);
      }
    }
  }
}

function soloAgarreCamposEnBlanco(array) {
  let loop = 0;
  while (loop == 0) {
    let fila = Math.floor(Math.random() * 9);
    let vacio = array[fila].innerHTML;
    if (vacio == "") {
      return fila;
    }
  }
}
//////////FUNCION RAMIFICACION/////////////
function pos(array, jugador) {
  // let jugadaActual = [];
  // //Lee la jugada actual del tablero y lo pushea a jugadaActual
  // for (let x = 0; x < array.length; x++) {
  //   let reader = array[x].innerHTML;

  //   jugadaActual.push(reader);
  // }
  // console.log(jugadaActual);
  // //Revisa cuantos espacios en blanco hay
  // let blanco = 0;
  // for (let i = 0; i < jugadaActual.length; i++) {
  //   let reader2 = jugadaActual[i];

  //   if (reader2 == "") {
  //     blanco++;
  //   }
  // }
  // // Lee jugada actual y se fija cuales espacios estan en blanco (Posiciones)
  let mejorPuntaje = -Infinity
  //Es mejor conaiderar la peor situacion de puntaje (que seria -infinito)
  let mejorCordenada;
  //La mejor cordenada sera escpjida dependiendo del puntaje del min o max 
  for (let c = 0; c <= 8; c++) {
   let vacio2 = array[c].innerHTML
    if (vacio2 == "") {
      //array[c].innerHTML = jugador
     
     puntaje = miniMaxPrueba(array)
     //El puntaje sera puesto por minimax si dicho puntaje llega ser maximo entoces agarralo
     if (puntaje > mejorPuntaje) {
     //La coordenada solo se mandara si el puntaje otorgado por minimax llega a ser mayor al mejor puntaje
      mejorPuntaje = puntaje
      mejorCordenada = c
     }
      //Necesito agarrar esos casos y ponerlos en lista!!!
    }
  }
  console.log(mejorPuntaje)
  return mejorCordenada
}

function miniMaxPrueba(array){
return 2

}
//////////FUNCION RAMIFICACION/////////////
// function soloAgarreCamposEnBlancoAvanzado(matriz) {
//   let loop = 0;
//   while (loop == 0) {
//     let fila = Math.floor(Math.random() * 3);
//     let columna = Math.floor(Math.random() * 3);
//     let vacio = matriz[fila][columna];

//     // if (matriz[0][0] == 'X' && matriz [0][2]== 'X' &&  matriz[0][1] == '') {
//     // let bloqueo1 = [0, 1]
//     // return bloqueo1
//     // } else {

//     // }
//     if (vacio == "") {
//       return Array.from(fila + "" + columna);
//     }
//   }
// }

/*function soloAgarreCamposEnBlanco2() {
  while (hola2 == 0) {
    let columna2 = Math.floor(Math.random() * 3);
    let fila2 = Math.floor(Math.random() * 3);
    let posicion2 = TicTacMatriz[fila2][columna2];

    if (posicion2 == "") {
      return columna2;
    }
  }
}
*/

//cambia estado juego
// NO borrar
function estado() {
  if (estadoJuego == "Bot") {
    estadoJuego = "jugando";
  }
}

//funcion tres en raya
// no borrar
function tresEnRaya(matriz, cambiosJugador) {
  if (ganeFila1(matriz, cambiosJugador)) {
    document.getElementById("fila1Gane").style.visibility = "visible";
  }

  if (ganeFila2(matriz, cambiosJugador)) {
    document.getElementById("fila2Gane").style.visibility = "visible";
  }

  if (ganeFila3(matriz, cambiosJugador)) {
    document.getElementById("fila3Gane").style.visibility = "visible";
  }

  if (ganeDiag(matriz, cambiosJugador)) {
    document.getElementById("fila1GaneDiagonal2").style.visibility = "visible";
  }

  if (ganeDiag2(matriz, cambiosJugador)) {
    document.getElementById("fila1GaneDiagonal").style.visibility = "visible";
  }

  if (ganeColumna1(matriz, cambiosJugador)) {
    document.getElementById("columna1Gane").style.visibility = "visible";
  }

  if (ganeColumna2(matriz, cambiosJugador)) {
    document.getElementById("columna2Gane").style.visibility = "visible";
  }

  if (ganeColumna3(matriz, cambiosJugador)) {
    document.getElementById("columna3Gane").style.visibility = "visible";
  }
}

//comprobaciones de bloqueo
function bloqueos(matriz) {
  let fila1Validacion = 0;
}
//MinMax pruebas
// let matrizPequeña = [
// ['o', 'o', 'x'],
// ['x', 'o', 'o'],
// ['x', 'x', 'x']
// ]
// for (let o = 0; o < matrizPequeña.length; o++) {
//   let fila = matrizPequeña[o];
//   for (let i = 0; i < fila.length; i++) {
//     let columna = fila[i];
//     console.log(columna);
//   }
// }

// NO BORRARR
//For de array sola
function ganeFila1(array, cambiosJugador) {
  let contador = 0;
  for (let x = 0; x <= 2; x++) {
    const ganeFila1 = array[x].innerHTML;

    if (ganeFila1 == cambiosJugador) {
      contador++;
    }
  }
  if (contador == 3) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false
  }
}
function ganeFila2(array, cambiosJugador) {
  let contador = 0;
  for (let x = 3; x <= 5; x++) {
    const ganeFila1 = array[x].innerHTML;

    if (ganeFila1 == cambiosJugador) {
      contador++;
    }
  }
  if (contador == 3) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

function ganeFila3(array, cambiosJugador) {
  let contador = 0;
  for (let x = 6; x <= 8; x++) {
    const ganeFila1 = array[x].innerHTML;

    if (ganeFila1 == cambiosJugador) {
      contador++;
    }
  }
  if (contador == 3) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

function ganeColumna1(array, cambiosJugador) {
  if (
    array[0].innerHTML == cambiosJugador &&
    array[3].innerHTML == cambiosJugador &&
    array[6].innerHTML == cambiosJugador
  ) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

function ganeColumna2(array, cambiosJugador) {
  if (
    array[1].innerHTML == cambiosJugador &&
    array[4].innerHTML == cambiosJugador &&
    array[7].innerHTML == cambiosJugador
  ) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}
function ganeColumna3(array, cambiosJugador) {
  if (
    array[2].innerHTML == cambiosJugador &&
    array[5].innerHTML == cambiosJugador &&
    array[8].innerHTML == cambiosJugador
  ) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

function ganeDiag(array, cambiosJugador) {
  if (
    array[0].innerHTML == cambiosJugador &&
    array[4].innerHTML == cambiosJugador &&
    array[8].innerHTML == cambiosJugador
  ) {
    
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

function ganeDiag2(array, cambiosJugador) {
  if (
    array[2].innerHTML == cambiosJugador &&
    array[4].innerHTML == cambiosJugador &&
    array[6].innerHTML == cambiosJugador
  ) {
    return {gano:true, quien:cambiosJugador}
  } else {
    return false;
  }
}

//for para empate
function empateArray(array) {
  let contador = 0;
  for (let z = 0; z < array.length; z++) {
    let empate = array[z].innerHTML;

    if (empate != "") {
      contador++;
    }
  }
  if (contador == 9) {
    return true
  } else {
    return false;
  }
}
