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

//el jugador 
let cambiosJugador = "O";
//Para cambiar el estado de juego y evitar errores
let estadoJuego = "jugando";
//movimientos del bot
//array de las cajas html para ponerle funcion a todas
let cajasHtml = [P0_0, P0_1, P0_2, P1_0, P1_1, P1_2, P2_0, P2_1, P2_2];
let arrayMatriz = ["", "", "", "", "", "", "", "", ""];




for (let x = 0; x < cajasHtml.length; x++) {
  //Me recorre las cajas y les da la funcion
  let espacios = cajasHtml[x];
  espacios.addEventListener("click", (o) => {
    if (estadoJuego == "jugando") {
      //si el estado de juego es jugando el evento toque pasara
      if (espacios.innerHTML == "") {
        cambiosJugador = "X";
        infoCambio(cambiosJugador);
        //info cambio muestra el turno en pantalla
        espacios.innerHTML = cambiosJugador;
       //cada funcion valida los ganes si un gane pase el estado cambiara a jugador
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
          //Muestra quien gano
          infoWin.innerHTML = cambiosJugador + " es el ganador!";
          //tres en raya hace visibles las "rayas" dependiendo del estado de gane o cual fue el gane
          tresEnRaya(cajasHtml, cambiosJugador);
          //restart pone el boton para volver a jugar
          setTimeout(restart, 1000);
        } else {
          //Si un empate ocurre muestra esa info
          if (empateArray(cajasHtml)) {
            infoWin.innerHTML = "Hubo un empate";

            setTimeout(restart, 1000);
          } else {
            //Si no hay un estado de gane/empate trae la funcion del bot
            estadoJuego = "Bot";
            setTimeout(
              bot,
              1000,
              cajasHtml,
              cambiosJugador,
              soloAgarreCamposEnBlanco(cajasHtml)
            );
            //Estado cambia al estado a jugando para que se pueda jugar denuevo
            setTimeout(estado, 1000);
          }
        }
      }
    }
  });
}


////////////////////////////////////////////
function infoCambio(cambiosJugador) {
  if (cambiosJugador == "O") {
    infoWin.innerHTML = "Turno de X";
  } else {
    infoWin.innerHTML = "Turno de O";
  }
}


//funcion bot
function bot(array, cambiosJugador, coordenadas) {
  estadoJuego = "Bot";
  //El bot ocupara o
  cambiosJugador = "O";

  if (estadoJuego == "Bot") {
    infoCambio(cambiosJugador);
    //Sus coordenadas vienen de la funcion "soloAgarreCamposEnBlanco"
    array[coordenadas].innerHTML = cambiosJugador;
   //ES practimante lo mismo a la funcion de toques del jugador
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
      tresEnRaya(array, cambiosJugador);

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
//Bloqueo de jugadas pinza
//Lo siguiente son validaciones de estados de juego que pueden pasar para volver al bot mas dificil ya que minimax no me funciono(algunos quemados otros con for)
function blockCentroX(array) {
  let contador = 0;
  if (array[4].innerHTML == "X") {
    contador++;
  }

  if (contador == 1) {
    if (array[0].innerHTML == "") {
      return 0;
    } else if (array[2].innerHTML == "") {
      return 2
    } else if (array[8].innerHTML == "") {
      return 8
    } else if (array[6].innerHTML == "") {
      return 6
    }
  } else {
    return null;
  }
}
function blockCentro(array) {
  let contador = 0;
  if (array[4].innerHTML == "") {
    contador++;
  }

  if (contador == 1) {
    if (array[4].innerHTML == "") {
      return 4;
    }
  } else {
    return null;
  }
}
function blockEstrategiaCentro(array) {
  let contador = 0;
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[0].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[8].innerHTML == "") {
      return 8;
    } else if (array[2].innerHTML == "") {
      return 2
    }
  } else {
    return null;
  }
}

function blockEstrategiaCentro2(array) {
  let contador = 0;
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[6].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[2].innerHTML == "") {
      return 2;
    } else if (array[8].innerHTML == "") {
      return 8
    }
  } else {
    return null;
  }
}

function blockEstrategiaCentro3(array) {
  let contador = 0;
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[2].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[6].innerHTML == "") {
      return 6;
    } else if (array[0].innerHTML == "") {
      return 0
    }
  } else {
    return null;
  }
}

function blockEstrategiaCentro5(array) {
  let contador = 0;
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[8].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[0].innerHTML == "") {
      return 0;
    } else if (array[6].innerHTML == "") {
      return 6
    }
  } else {
    return null;
  }
}
function blockEstrategia(array) {
  let contador = 0;
  if (array[0].innerHTML == "X") {
    contador++;
  }
  if (array[2].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[1].innerHTML == "") {
      return 1;
    }
  } else {
    return null;
  }
}
function blockEstrategia3(array) {
  let contador = 0;
  if (array[6].innerHTML == "X") {
    contador++;
  }
  if (array[8].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[7].innerHTML == "") {
      return 7;
    }
  } else {
    return null;
  }
}
function blockEstrategia4(array) {
  let contador = 0;
  if (array[8].innerHTML == "X") {
    contador++;
  }
  if (array[2].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[5].innerHTML == "") {
      return 5;
    }
  } else {
    return null;
  }
}
function blockEstrategia2(array) {
  let contador = 0;
  if (array[0].innerHTML == "X") {
    contador++;
  }
  if (array[6].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[3].innerHTML == "") {
      return 3;
    }
  } else {
    return null;
  }
}
//oportunidadGane1
function gane1(array) {
  let contadorfila1 = 0;

  for (let o = 0; o <= 2; o++) {
    let blockThiSpot = array[o].innerHTML;

    if (blockThiSpot == "O") {
      contadorfila1++;
    }
  }
  if (contadorfila1 == 2) {
    for (let o = 0; o <= 2; o++) {
      let blockThiSpot = array[o].innerHTML;
      if (blockThiSpot == "") {
        return o;
      }
    }
  } else {
    return null;
  }
}
//oportunidadGane2
function gane2(array) {
  let contadorfila2 = 0;

  for (let o = 3; o <= 5; o++) {
    let blockThiSpot = array[o].innerHTML;

    if (blockThiSpot == "O") {
      contadorfila2++;
    }
  }
  if (contadorfila2 == 2) {
    for (let o = 3; o <= 5; o++) {
      let blockThiSpot = array[o].innerHTML;
      if (blockThiSpot == "") {
        return o;
      }
    }
  } else {
    return null;
  }
}
//oportunidadGane3
function gane3(array) {
  let contadorfila3 = 0;

  for (let o = 6; o <= 8; o++) {
    let blockThiSpot = array[o].innerHTML;

    if (blockThiSpot == "O") {
      contadorfila3++;
    }
  }
  if (contadorfila3 == 2) {
    for (let o = 6; o <= 8; o++) {
      let blockThiSpot = array[o].innerHTML;
      if (blockThiSpot == "") {
        return o;
      }
    }
  } else {
    return null;
  }
}
//OportunidadGane3
function ganeColumn1(array) {
  let contador = 0;
  if (array[0].innerHTML == "O") {
    contador++;
  }
  if (array[3].innerHTML == "O") {
    contador++;
  }
  if (array[6].innerHTML == "O") {
    contador++;
  }

  if (contador == 2) {
    if (array[6].innerHTML == "") {
      return 6;
    } else if (array[3].innerHTML == "") {
      return 3;
    } else if (array[0].innerHTML == "") {
      return 0;
    }
  } else {
    return null;
  }
}
//OportunidadGane4
function ganeColumn2(array) {
  let contador = 0;
  if (array[1].innerHTML == "O") {
    contador++;
  }
  if (array[4].innerHTML == "O") {
    contador++;
  }
  if (array[7].innerHTML == "O") {
    contador++;
  }

  if (contador == 2) {
    if (array[1].innerHTML == "") {
      return 1;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[7].innerHTML == "") {
      return 7;
    }
  } else {
    return null;
  }
}
//OportunidadGane5
function ganeColumn3(array) {
  let contador = 0;
  if (array[2].innerHTML == "O") {
    contador++;
  }
  if (array[5].innerHTML == "O") {
    contador++;
  }
  if (array[8].innerHTML == "O") {
    contador++;
  }

  if (contador == 2) {
    if (array[2].innerHTML == "") {
      return 2;
    } else if (array[5].innerHTML == "") {
      return 5;
    } else if (array[8].innerHTML == "") {
      return 8;
    }
  } else {
    return null;
  }
}
//OportunidadGane6
function diagGane(array) {
  let contador = 0;
  if (array[0].innerHTML == "O") {
    contador++;
  }
  if (array[4].innerHTML == "O") {
    contador++;
  }
  if (array[8].innerHTML == "O") {
    contador++;
  }

  if (contador == 2) {
    if (array[0].innerHTML == "") {
      return 0;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[8].innerHTML == "") {
      return 8;
    }
  } else {
    return null;
  }
}
//OportunidadGane7
function diagGane2(array) {
  let contador = 0;
  if (array[2].innerHTML == "O") {
    contador++;
  }
  if (array[4].innerHTML == "O") {
    contador++;
  }
  if (array[6].innerHTML == "O") {
    contador++;
  }

  if (contador == 2) {
    if (array[2].innerHTML == "") {
      return 2;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[6].innerHTML == "") {
      return 6;
    }
  } else {
    return null;
  }
}
//DiagonalBloqueo
function blockDiagonal(array) {
  let contador = 0;
  if (array[2].innerHTML == "X") {
    contador++;
  }
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[6].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[2].innerHTML == "") {
      return 2;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[6].innerHTML == "") {
      return 6;
    }
  } else {
    return null;
  }
}
//Diagonal2Bloqueo
function blockDiagonal2(array) {
  let contador = 0;
  if (array[0].innerHTML == "X") {
    contador++;
  }
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[8].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[0].innerHTML == "") {
      return 0;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[8].innerHTML == "") {
      return 8;
    }
  } else {
    return null;
  }
}

//Columa1  bloqueo
function blockColumn1(array) {
  let contador = 0;
  if (array[0].innerHTML == "X") {
    contador++;
  }
  if (array[3].innerHTML == "X") {
    contador++;
  }
  if (array[6].innerHTML == "X") {
    contador++;
  }

  if (contador == 2) {
    if (array[6].innerHTML == "") {
      return 6;
    } else if (array[3].innerHTML == "") {
      return 3;
    } else if (array[0].innerHTML == "") {
      return 0;
    }
  } else {
    return null;
  }
}
//Columna2 bloqueo
function blockColumn2(array) {
  let contador = 0;
  if (array[1].innerHTML == "X") {
    contador++;
  }
  if (array[4].innerHTML == "X") {
    contador++;
  }
  if (array[7].innerHTML == "X") {
    contador++;
  }
  if (contador == 2) {
    if (array[1].innerHTML == "") {
      return 1;
    } else if (array[4].innerHTML == "") {
      return 4;
    } else if (array[7].innerHTML == "") {
      return 7;
    }
  } else {
    return null;
  }
}
//Tercera columna bloqueo
function blockColumn3(array) {
  let contador = 0;
  if (array[2].innerHTML == "X") {
    contador++;
  }
  if (array[5].innerHTML == "X") {
    contador++;
  }
  if (array[8].innerHTML == "X") {
    contador++;
  }
  if (contador == 2) {
    if (array[2].innerHTML == "") {
      return 2;
    } else if (array[5].innerHTML == "") {
      return 5;
    } else if (array[8].innerHTML == "") {
      return 8;
    }
  } else {
    return null;
  }
}
//Primera fila bloqueo
function blocks1(array) {
  let contadorfila1 = 0;

  for (let o = 0; o <= 2; o++) {
    let blockThiSpot = array[o].innerHTML;

    if (blockThiSpot == "X") {
      contadorfila1++;
    }
  }
  if (contadorfila1 == 2) {
    for (let o = 0; o <= 2; o++) {
      let blockThiSpot = array[o].innerHTML;
      if (blockThiSpot == "") {
        return o;
      }
    }
  } else {
    return null;
  }
}
//Segunda fila bloqueo
function blocks2(array) {
  let contadorfila2 = 0;
  for (let x = 3; x <= 5; x++) {
    let blockThiSpot2 = array[x].innerHTML;

    if (blockThiSpot2 == "X") {
      contadorfila2++;
    }
  }
  if (contadorfila2 == 2) {
    for (let x = 3; x <= 5; x++) {
      let blockThiSpot2 = array[x].innerHTML;
      if (blockThiSpot2 == "") {
        return x;
      }
    }
  } else {
    return null;
  }
}

//Tercera fila bloqueo
function blocks3(array) {
  let contadorfila3 = 0;
  for (let i = 6; i <= 8; i++) {
    let blockThiSpot3 = array[i].innerHTML;

    if (blockThiSpot3 == "X") {
      contadorfila3++;
    }
  }
  if (contadorfila3 == 2) {
    for (let i = 6; i <= 8; i++) {
      let blockThiSpot3 = array[i].innerHTML;
      if (blockThiSpot3 == "") {
        return i;
      }
    }
  } else {
    return null;
  }
}
//Como las fuciones de oportunidades de bloqueo / oportunidad de gane / Bloqueo de estrategias son algo extensas las explicare aqui
//Ya que todas tienen una logica parecida a las comprobaciones de gane
//Los bloqueos revisara la fila/Diagonal/columna indicada y si ve dos X alineadas mandara la posicion a bloquear (frenar al jugador)
//Las oportunidades de gane haram lo mismo pero vera si en una fila/columna/diagonal hay dos O alineadas para devolver la posicion faltante 
//Los bloqueos de estrategia son situaciones del tablero que observe mientras probaba, lo que hara es mandar la posicion indicada para cortar esa
//estrategia en especifico
//el bot no es imposible pero no es tan facil
//Esta funcion comprueba los estado de juego actual y dependiendo si alguna de las situaciones antes mencionadas ocurre devulve la coordenada predeterminada
function soloAgarreCamposEnBlanco(array) {
  let bloqueo = false;
  let oportunidadGane = false;
  let estrategia = false;
//Funciona de esta manera Primero comprueba alguna situacion en la que el tenga una oportunidad de ganar este disponible en el tablero
//Tomara esa coordenada de gane otorgada pos las funciones de gane (para todos los casos)
  if (diagGane(array) != null) {
    oportunidadGane = true;
    return diagGane(array);
  }
  if (diagGane2(array) != null) {
    oportunidadGane = true;
    return diagGane2(array);
  }
  if (ganeColumn1(array) != null) {
    oportunidadGane = true;
    return ganeColumn1(array);
  }
  if (ganeColumn2(array) != null) {
    oportunidadGane = true;
    return ganeColumn2(array);
  }
  if (ganeColumn3(array) != null) {
    oportunidadGane = true;
    return ganeColumn3(array);
  }
  if (gane1(array) != null) {
    oportunidadGane = true;
    return gane1(array);
  }
  if (gane2(array) != null) {
    oportunidadGane = true;
    return gane2(array);
  }
  if (gane3(array) != null) {
    oportunidadGane = true;
    return gane3(array);
  }
//Luego si no hay ninguna oportunidad de gane inmediato revisara algunas posibilidad de que haya alguna estrategia estilo pinza que pueda pasar
//(Solo revisara las que yo coloque en esas funciones de BlockStrategy o BlockCentro), por ende no cubre todas las existentes
  if (oportunidadGane == false) {
   if (blockEstrategiaCentro5(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategiaCentro5(array);
    }
  
  if (blockEstrategiaCentro3(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategiaCentro3(array);
    }
  if (blockEstrategiaCentro2(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategiaCentro2(array);
    }
  if (blockEstrategiaCentro(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategiaCentro(array);
    }
    if (blockCentro(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockCentro(array);
    }
    if (blockEstrategia4(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategia4(array);
    }
    if (blockEstrategia3(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategia3(array);
    }
    if (blockEstrategia2(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategia2(array);
    }
    if (blockEstrategia(array) != null) {
      estrategia = true;
      console.log(estrategia);
      return blockEstrategia(array);
    }
  }
//SI no hay algun indicio de una estrategia o gane inmediato en el tablero, tomara las coordenadas de las funciones de bloqueo
//En otras palabras tomara las coordenadas donde vea oportunidad de frenar al jugador de un gane en su siguiente turno (las funcion BLockDiag o Block column haran esas validaciones de posible bloqueo)
  if (estrategia == false && oportunidadGane == false) {
    if (blockDiagonal2(array) != null) {
      bloqueo = true;
      return blockDiagonal2(array);
    }
    if (blockDiagonal(array) != null) {
      bloqueo = true;
      return blockDiagonal(array);
    }
    if (blockColumn3(array) != null) {
      bloqueo = true;
      return blockColumn3(array);
    }
    if (blockColumn2(array) != null) {
      bloqueo = true;
      return blockColumn2(array);
    }
    if (blockColumn1(array) != null) {
      bloqueo = true;
      return blockColumn1(array);
    }
    if (blocks1(array) != null) {
      bloqueo = true;
      return blocks1(array);
    }
    if (blocks2(array) != null) {
      bloqueo = true;
      return blocks2(array);
    }
    if (blocks3(array) != null) {
      bloqueo = true;
      return blocks3(array);
    }
  }
  //Como caso final si las validacione de algun bloqueo o alguna oportunidad de gane no ocurran hara un movmiento random utilizando
  //MathRandom y mathFloor
  if (bloqueo == false && oportunidadGane == false) {
    let loop = 0;
    while (loop == 0) {
    //Necesitaba que me tirara numeros random del 1 al 8 infinitamente para luego filtrarlo con una condicion
    //Por eso utilize un while
      let fila = Math.floor(Math.random() * 9);
      let vacio = array[fila].innerHTML;
      //hara una validacion si el espacio usando el numero dado esta en blanco devuelvelo
      if (vacio == "") {
        return fila;
      }
    }
  }
}



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
//esta funcion tambien toma el tablero y al jugador
//tres en raya tomara como referencia a las validaciones de gane para hacer visible la imagen oculta de la raya en donde 
//Ocurra ese gane
  if (ganeFila1(matriz, cambiosJugador)) {
    document.getElementById("fila1Gane").style.visibility = "visible";
    //es la misma logica para todas las comprobacionesde gane
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



// NO BORRARR
//For de array sola
//Las siquientes son comprobaciones de gane
function ganeFila1(array, cambiosJugador) {
  let contador = 0;
  for (let x = 0; x <= 2; x++) {
    const ganeFila1 = array[x].innerHTML;
    //Revisara el estado de una fila en especico y si llega a ver el mismo jugador en esa fila
    //le sumara al contaodor 1

    if (ganeFila1 == cambiosJugador) {
      contador++;
    }
  }
  if (contador == 3) {
  //si eso se repite 3 veces, que el contador llegue a 3 dara un objeto informando que alguien gano y quien gano
    return { gano: true, quien: cambiosJugador };
  } else {
    return false;
  }
}
//Esta misma logica es utilizada para todas las filas
function ganeFila2(array, cambiosJugador) {
  let contador = 0;
  for (let x = 3; x <= 5; x++) {
    const ganeFila1 = array[x].innerHTML;

    if (ganeFila1 == cambiosJugador) {
      contador++;
    }
  }
  if (contador == 3) {
    return { gano: true, quien: cambiosJugador };
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
    return { gano: true, quien: cambiosJugador };
  } else {
    return false;
  }
}
//Los ganes de columna si son posiciones quemadas que comprabara si el jugador esta en esas posiciones
//Y devolvera si alguien gano junto con quien
//Es las misma logica para todas las columnas 
function ganeColumna1(array, cambiosJugador) {
  if (
    array[0].innerHTML == cambiosJugador &&
    array[3].innerHTML == cambiosJugador &&
    array[6].innerHTML == cambiosJugador
  ) {
    return { gano: true, quien: cambiosJugador };
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
    return { gano: true, quien: cambiosJugador };
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
    return { gano: true, quien: cambiosJugador };
  } else {
    return false;
  }
}
//las comprobaciones de las diagonales son en escencia lo mismo a las columnas 
//La logica es la misma
function ganeDiag(array, cambiosJugador) {
  if (
    array[0].innerHTML == cambiosJugador &&
    array[4].innerHTML == cambiosJugador &&
    array[8].innerHTML == cambiosJugador
  ) {
    return { gano: true, quien: cambiosJugador };
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
    return { gano: true, quien: cambiosJugador };
  } else {
    return false;
  }
}

//for para empate
//Empate revisara todo el array(tablero) con un for y si todo esta lleno
//Enviara un booleano de true
function empateArray(array) {
  let contador = 0;
  for (let z = 0; z < array.length; z++) {
    let empate = array[z].innerHTML;

    if (empate != "") {
      contador++;
    }
  }
  if (contador == 9) {
  //esta vez el contador llega a 9 (por los 9 espacios)
    return true;
  } else {
    return false;
  }
}
