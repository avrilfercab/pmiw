//Fernandez Cabrera Avril, 119027/4
//https://youtu.be/pXSFYmK0kIU

let objjuego, objpantalla;
let pantallas = [], autos = [], texto = [];
let fuente;
let musica;

function preload() {
  musica = loadSound("/assets/musica.mp3");
  fuente=loadFont("/assets/mifuente.ttf");
  for (let i=0; i<2; i++) {
    autos[i] = loadImage("assets/auto"+i+".png")
  }
  for (let i=0; i<6; i++) {
    pantallas[i] = loadImage("assets/pantalla"+i+".jpg")
  }
}
function setup() {
  cargarTexto();
  musica.amp(0.15);
  createCanvas(640, 480);
  objjuego = new juego();
  objpantalla = new pantalla(pantallas, texto);
  textFont(fuente);
}


function draw() {
  background(200);
  if (objjuego.estado === "inicio") {
    objpantalla.pantallaInicio();
    objjuego = new juego();
  } else if (objjuego.estado === "jugando") {
    objpantalla.pantallaJuego();
    objjuego.tiempoactual = (millis() - objjuego.tiempo) / 1000;
    if (objjuego.tiempoactual >= objjuego.tiempolimite) {
      objjuego.estado = "gano";
    }
  } else if (objjuego.estado === "perdio") {
    objpantalla.pantallaPerdiste()
      objjuego.tiempo = millis();
  } else if (objjuego.estado === "gano") {
    objpantalla.pantallaGanaste()
  } else if (objjuego.estado === "creditos") {
    objpantalla.pantallaCreditos()
  } else if (objjuego.estado === "reglas") {
    objpantalla.pantallaReglas()
  }
}

function keyPressed() {
  objjuego.teclapresionada(keyCode);
  if (keyCode === ENTER && objjuego.estado === "inicio") {
    objjuego.estado = "reglas";
  } else if (keyCode === ENTER && objjuego.estado === "reglas") {
    objjuego.estado = "jugando";
    objjuego.tiempo = millis();
  }
  if (key === "r") {
    objjuego.estado = "inicio";
  }
  if (key === "c") {
    objjuego.estado = "creditos";
  }
}
