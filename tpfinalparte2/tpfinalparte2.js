//Avril Fernandez Cabrera 119027/04
//Comision 2
//https://youtu.be/Rcrn0R-LPE8

let objjuego, objpantalla;
let fondo, inicio;
let pantallas = [];
let estado;
let fuente;
let tiempolimite, tiempoactual, tiempo;
let musica;
let texto = [];

function preload() {
  musica = loadSound("/assets/musica.mp3");
  fuente=loadFont("/assets/mifuente.ttf")
  pantallas[0] = loadImage( "/assets/1.jpg");
  pantallas[1] = loadImage( "/assets/2.jpg");
  pantallas[2] = loadImage( "/assets/3.jpg");
  pantallas[3] = loadImage( "/assets/4.jpg");
  pantallas[4] = loadImage( "/assets/5.jpg");
  pantallas[5] = loadImage( "/assets/6.jpg");
}

function setup() {
  cargarTexto();
  musica.amp(0.3);
  createCanvas(640, 480);
  objjuego = new juego(1);
  objpantalla = new pantalla();
  estado = "inicio";
  textFont(fuente);
  tiempo = millis();
  tiempolimite = 30;
}


function draw() {
  background(200);
  print(estado);
  tiempoactual = (millis() - tiempo) / 1000;
  if (estado === "inicio") {
    objpantalla.pantallaInicio();
    objjuego = new juego(1);
    contador = 0;
  } else if (estado === "jugando") {
    objpantalla.pantallaJuego();
    tiempoactual = (millis() - tiempo) / 1000;
    if (tiempoactual >= tiempolimite) {
      estado = "gano";
    }
  } else if (estado === "perdio") {
    objpantalla.pantallaPerdiste()
      tiempo = millis();
  } else if (estado === "gano") {
    objpantalla.pantallaGanaste()
  } else if (estado === "creditos") {
    objpantalla.pantallaCreditos()
  } else if (estado === "reglas") {
    objpantalla.pantallaReglas()
  }
}

function keyPressed() {
  objjuego.teclapresionada(keyCode);
  if (keyCode === ENTER && estado === "inicio") {
    estado = "reglas";
  } else if (keyCode === ENTER && estado === "reglas") {
    estado = "jugando";
    tiempo = millis();
  }
  if (key === "r") {
    estado = "inicio";
  }
  if (key === "c") {
    estado = "creditos";
  }
}
