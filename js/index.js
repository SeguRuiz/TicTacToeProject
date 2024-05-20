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
  infoWin.innerHTML = "¿Restart?";
  infoWin.addEventListener("click", () => {
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
//tic tac Matriz

//funciones individuales
function tocarP0_0() {
  //Los toques solo ocurriran si el estado de juego siguen en "jugando" asi como el cambio de O a X
  //Esto para evitar errores como que al ganar se pueda seguir jugando
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[0][0] == "") {
      //evaluara si es el campo tocado esta en blanco en la matriz, esto para evitar un error de que
      //al tocar un campo ya utilizado el bot juegue o se cambie de O a X y viceversa
      cambiosJugador = "X";
      //cuando el jugador toque cambiara a X
      infoCambio(cambiosJugador);
      //InfoCambio muestra en el texto informativo si el turno del jugador ocurre o el del bot

      TicTacMatriz[0][0] = cambiosJugador;
      //Luego igualo cambios jugador(que son las X) a la matriz principal, que su contenido se muestre
      //En el campo tocado(TicTacMatriz)
      P0_0.innerHTML = TicTacMatriz[0][0];
      //Luego el innerHtml del campo tocado sera igual al de la matriz asi la informacion de la matriz sera
      //reflejado al espacio indicado en el html del DOM

      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
      //Luego siguen las comprobaciones de gane
      //Primeramente comprobara los ganes en caso de que haya un gane con tablero lleno y tome de primero el gane
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
        //si hay un gane el estado de juego pasara a "ganador" por ende los toques quedan bloqueados
        //Y asi no se podra jugar cuando haya un gane.

        estadoJuego = "ganador";
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

        //Luego mostrara el gane
      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      console.log(TicTacMatriz);
    }
  }
}

function tocarP0_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[0][1] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[0][1] = cambiosJugador;
      P0_1.innerHTML = TicTacMatriz[0][1];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}

function tocarP0_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[0][2] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[0][2] = cambiosJugador;
      P0_2.innerHTML = TicTacMatriz[0][2];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}
//fila 1
function tocarP1_0() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][0] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[1][0] = cambiosJugador;
      P1_0.innerHTML = TicTacMatriz[1][0];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}

function tocarP1_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][1] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[1][1] = cambiosJugador;
      P1_1.innerHTML = TicTacMatriz[1][1];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}

function tocarP1_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[1][2] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[1][2] = cambiosJugador;
      P1_2.innerHTML = TicTacMatriz[1][2];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }

      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}
//fila 2
function tocarP2_0() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][0] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[2][0] = cambiosJugador;
      P2_0.innerHTML = TicTacMatriz[2][0];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }
      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));
    }
  }
}

function tocarP2_1() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][1] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[2][1] = cambiosJugador;
      P2_1.innerHTML = TicTacMatriz[2][1];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }

      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}

function tocarP2_2() {
  if (estadoJuego == "jugando") {
    if (TicTacMatriz[2][2] == "") {
      cambiosJugador = "X";
      infoCambio(cambiosJugador);
      TicTacMatriz[2][2] = cambiosJugador;
      P2_2.innerHTML = TicTacMatriz[2][2];
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
        infoWin.innerHTML = cambiosJugador + " es el ganador!";
        setTimeout(restart, 1000);
        if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna3Gane").style.visibility = "visible";
        }

      } else {
        if (empate(TicTacMatriz)) {
          infoWin.innerHTML = "Hubo un empate";
          setTimeout(restart, 1000);
        } else {
          estadoJuego = "Bot";
          setTimeout(
            bot,
            1000,
            TicTacMatriz,
            cambiosJugador,
            soloAgarreCamposEnBlanco(TicTacMatriz)
          );
          setTimeout(estado, 1000);
        }
      }

      //console.log(soloAgarreCamposEnBlanco(TicTacMatriz));

      console.log(TicTacMatriz);
    }
  }
}

////////////////////////////////////////////
function infoCambio(cambiosJugador) {
  if (cambiosJugador == "O") {
    infoWin.innerHTML = "Turno de X";
  } else {
    infoWin.innerHTML = "Turno de O";
  }
}

//fors recoren filas en busca de gane-filas
function fila1(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[0][index] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
    return true;
  } else {
    return false;
  }
}

function fila2(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[1][index] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
    return true;
  } else {
    return false;
  }
}

function fila3(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[2][index] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
    return true;
  } else {
    return false;
  }
}
//fors recoren filas en busca de gane-columnas
function columna1(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][0] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
    return true;
  } else {
    return false;
  }
}

function columna2(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][1] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
    return true;
  } else {
    return false;
  }
}

function columna3(matriz, cambiosJugador) {
  let cont = 0;
  for (let index = 0; index < 3; index++) {
    if (matriz[index][2] == cambiosJugador) {
      cont++;
    }
  }

  if (cont == 3) {
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
function empate(matriz) {
  if (
    matriz[0][0] != "" &&
    matriz[0][1] != "" &&
    matriz[0][2] != "" &&
    matriz[1][0] != "" &&
    matriz[1][1] != "" &&
    matriz[1][2] != "" &&
    matriz[2][0] != "" &&
    matriz[2][1] != "" &&
    matriz[2][2] != ""
  ) {
    return true;
  } else {
    return false;
  }
}
//funcion bot
function bot(matriz, cambiosJugador, coordenadas) {
  estadoJuego = "Bot";
  cambiosJugador = "O";
  console.log(cambiosJugador);
  if (estadoJuego == "Bot") {
    infoCambio(cambiosJugador);
    matriz[coordenadas[0]][coordenadas[1]] = cambiosJugador;

    console.log(matriz);
    P0_0.innerHTML = matriz[0][0];
    P0_1.innerHTML = matriz[0][1];
    P0_2.innerHTML = matriz[0][2];
    P1_0.innerHTML = matriz[1][0];
    P1_1.innerHTML = matriz[1][1];
    P1_2.innerHTML = matriz[1][2];
    P2_0.innerHTML = matriz[2][0];
    P2_1.innerHTML = matriz[2][1];
    P2_2.innerHTML = matriz[2][2];

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
      infoWin.innerHTML = cambiosJugador + " es el ganador!";
      setTimeout(restart, 1000);
      if (fila1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1Gane").style.visibility = "visible";
        }

        if (fila2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila2Gane").style.visibility = "visible";
        }

        if (fila3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila3Gane").style.visibility = "visible";
        }

        if (diagonal2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal").style.visibility =
            "visible";
        }

        if (diagonal(TicTacMatriz, cambiosJugador)) {
          document.getElementById("fila1GaneDiagonal2").style.visibility =
            "visible";
        }

        if (columna1(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna1Gane").style.visibility = "visible";
        }

        if (columna2(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

        if (columna3(TicTacMatriz, cambiosJugador)) {
          document.getElementById("columna2Gane").style.visibility = "visible";
        }

    } else {
      if (empate(TicTacMatriz)) {
        infoWin.innerHTML = "Hubo un empate";
        setTimeout(restart, 1000);
      }
    }
  }
}

function soloAgarreCamposEnBlanco(matriz) {
  let loop = 0;
  while (loop == 0) {
    let fila = Math.floor(Math.random() * 3);
    let columna = Math.floor(Math.random() * 3);
    let vacio = matriz[fila][columna];

    if (vacio == "") {
      return Array.from(fila + "" + columna);
    }
  }
}

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
function estado() {
  if (estadoJuego == "Bot") {
    estadoJuego = "jugando";
  }
}
