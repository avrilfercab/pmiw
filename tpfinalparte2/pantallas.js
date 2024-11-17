class pantalla {
  constructor() {
  }
  pantallaInicio() {
    image(pantallas[0], 0, 0, width, height)
      textAlign(CENTER);
      fill(0);
    text(texto [0], (width/2), 400);
  }

  pantallaJuego() {
    image(pantallas[1], 0, 0, width, height);
    objjuego.dibujar();
    objjuego.reiniciarautoenemigos();
    if (!musica.isPlaying()) {
      musica.loop();
    }
  }

  pantallaPerdiste() {
    image(pantallas[2], 0, 0, width, height);
    fill(0)
    rect(50, 350, 580, 90)
    fill(255)
    text(texto [1], 345, 400);
  }

  pantallaGanaste() {
    image(pantallas[3], 0, 0, width, height);
    fill(0)
    rect(20, 430, 600, 40)
    fill(255)
    text (textAlign(CENTER));
    text(texto [2], width/2, 455);
  }

  pantallaReglas() {
    image(pantallas[4], 0, 0, width, height);
    fill(255);
    textSize(30)
    text(texto[3], 460, 200)
    textSize(14)
    text(texto [4], 460, 230);
    fill(0)
    text(texto[5], 300, 450);
    
  }

  pantallaCreditos() {
    image(pantallas[5], 0, 0, width, height);
    fill(255)
    text(texto [6], 230, 416);
    text(texto [7], 450, 416);
    text(texto [8], width/2, 460);
  }
}
