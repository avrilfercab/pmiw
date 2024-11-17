let pantalla = [];
let estado;
let musica;
let tipografia;
let texto = [];
let tiempo, duracion, tpa;

function preload() {
  tipografia = loadFont('/assets/tipografia.ttf');
  musica = loadSound('assets/musica.mp3');
  pantalla[0] = loadImage ("/assets/0.0.png");
  pantalla[1] = loadImage ("/assets/0.1.png");
  pantalla[2] = loadImage ("/assets/0.2.png"); //primeros botones camino A y B
  pantalla[3] = loadImage ("/assets/1.1.png"); // camino A
  pantalla[4] = loadImage ("/assets/1.2.png"); // camino A
  pantalla[5] = loadImage ("/assets/1.3.png"); // camino A
  pantalla[6] = loadImage ("/assets/2.1.png"); // camino B
  pantalla[7] = loadImage ("/assets/2.2.png"); // camino B
  pantalla[8] = loadImage ("/assets/2.3.png"); // camino B
  pantalla[9] = loadImage ("/assets/3.1.png");
  pantalla[10] = loadImage ("/assets/3.2.png");
  pantalla[11] = loadImage ("/assets/3.3.png"); //segundos botones caminos C D y E
  pantalla[12] = loadImage ("/assets/4.0.png"); // camino C + boton de fin
  pantalla[13] = loadImage ("/assets/5.1.png"); // camino D
  pantalla[14] = loadImage ("/assets/5.2.png"); // camino D
  pantalla[15] = loadImage ("/assets/5.3.png"); // Camino D + boton de fin
  pantalla[16] = loadImage ("/assets/6.0.png"); // camino E + boton de fin
  pantalla[17] = loadImage ("/assets/7.0.jpg");  // creditos + boton de reinicio
 
}

function cargarTexto(){
  texto [0] = "Comenzar";
  texto [1] = "Continuar";
  texto [2] = "Obedece a Cartman";
  texto [3] = "Enloquece de poder";
  texto [4] = "Cobrarle a la vieja";
  texto [5] = "Regresar tarde a casa";
  texto [6] = "Le crees";
  texto [7] = "Le mentis";
  texto [8] = "No le crees";
  texto [9] = "Reiniciar";
  texto [10] = "Creditos";
  texto [11] = "Abril Funes\n118947/3";
  texto [12] = "Avril Fernandez \nCabrera 119027/4";
  }

function setup() {
  createCanvas (640, 480);
  textSize(20);
  textFont(tipografia);
  musica.amp (0.3);
  estado = "inicio";
  tiempo = millis();
  duracion = 20;
  cargarTexto();
}


function draw() {
  background(0);
    tpa = (millis() - tiempo) / 1000;

  if (estado === "inicio") {
    image (pantalla[0], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
    text(texto[0], 505, 444);
      if (tpa >= duracion) {
      estado = "img1";
      tiempo = millis(); }
  } else if (estado === "img1") {
    image (pantalla[1], 0, 0, 640, 480);
    rect (100, 30, 450, 100)
    text("Cartman le hace creer a Butters que \nesta dentro de una realidad virtual \nutilizando un Oculus Rift", 110, 65);
    botones (450, 420, 150, 30); 
    text(texto[1], 470, 444);
     if (tpa >= duracion) {
      estado = "img2";
      tiempo = millis(); }
    
  } else if (estado === "img2") {
    image (pantalla[2], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Cartman guia a Butters por el barrio\nQue hace butters?", 110, 65);
    botones(20, 420, 240, 30);
    botones (380, 420, 240, 30 );
    text(texto[2], 30, 444);
    text(texto[3], 390, 444);
 
} else if (estado === "img3") {
    image (pantalla[3], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Butters limpia la nieve de la vereda", 110, 75);
    botones (370, 420, 250, 30);
    text(texto[4], 380, 444);
    if (tpa >= duracion) {
      estado = "img4";
      tiempo = millis(); }
 
} else if (estado === "img4") {
    image (pantalla[4], 0, 0, 640, 480);
    botones (300, 420, 300, 30);
    text(texto[5], 320, 444);
   if (tpa >= duracion) {
      estado = "img5";
      tiempo = millis(); }
      
} else if (estado === "img5") {
    image (pantalla[5], 0, 0, 640, 480);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
   if (tpa >= duracion) {
      estado = "img9";
      tiempo = millis(); }
 
} else if (estado === "img6") {
    image (pantalla[6], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Butters patea a su padre", 180, 75);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
      if (tpa >= duracion) {
      estado = "img7";
      tiempo = millis(); }
 
} else if (estado === "img7") {
    image (pantalla[7], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Butters atropella un auto", 180, 75);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
      if (tpa >= duracion) {
      estado = "img8";
      tiempo = millis(); }
 
} else if (estado === "img8") {
    image (pantalla[8], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Acuchillan a Butters y \ntermina en el hospital", 180, 65);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
      if (tpa >= duracion) {
      estado = "img9";
      tiempo = millis(); }
 
} else if (estado === "img9") {
    image (pantalla[9], 0, 0, 640, 480);
    botones (500, 420, 125, 30);
    text(texto[1], 505, 444);
    rect (100, 30, 450, 80)
    text("Butters es castigado", 180, 65);
      if (tpa >= duracion) {
      estado = "img10";
      tiempo = millis(); }
 
} else if (estado === "img10") {
    image (pantalla[10], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Cartman queda atrapado en \nla simulacion", 180, 65);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
      if (tpa >= duracion) {
      estado = "img11";
      tiempo = millis(); }

} else if (estado === "img11") {
    image (pantalla[11], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Kyle te dice que esta dentro de \nla simulacion para sacarte", 180, 65);
    botones(40, 420, 120, 30);
    botones(260, 420, 120, 30);
    botones (475, 420, 140, 30);
    text(texto[6], 47, 444);
    text(texto[7], 270, 444);
    text(texto[8], 480, 444);
 
} else if (estado === "img12") {
    image (pantalla[12], 0, 0, 640, 480);
    botones (500, 420, 130, 30);
    text(texto[10], 510, 444);
    rect (100, 30, 450, 80)
    text("Ambos escapan de la simulacion", 130, 80);
      if (tpa >= duracion) {
      estado = "img17";
      tiempo = millis(); }
 
} else if (estado === "img13") {
    image (pantalla[13], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Le haces creer a Kyle que el \nesta atrapado en la simulacion", 130, 70);
    botones (500, 420, 130, 30);
    text(texto[1], 510, 444);
      if (tpa >= duracion) {
      estado = "img14";
      tiempo = millis(); }
 
} else if (estado === "img14") {
    image (pantalla[14], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Ambos estan atrapados \ndeben llamar a atencion al cliente", 130, 70);
    botones (500, 420, 130, 30);
    text(texto[1], 505, 444);
      if (tpa >= duracion) {
      estado = "img15";
      tiempo = millis(); }
 
} else if (estado === "img15") {
    image (pantalla[15], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Todo fue real \n no hay tal simulacion", 130, 70);
    botones (500, 420, 130, 30);
    text(texto[10], 510, 444);
      if (tpa >= duracion) {
      estado = "img17";
      tiempo = millis(); }
 
} else if (estado === "img16") {
    image (pantalla[16], 0, 0, 640, 480);
    rect (100, 30, 450, 80)
    text("Quedan atrapados en un bucle\n de atencion al cliente", 130, 70);
    botones (500, 420, 120, 30);
    text(texto[10], 510, 444);
      if (tpa >= duracion) {
      estado = "img17";
      tiempo = millis(); }
 
} else if (estado === "img17") {
    image (pantalla[17], 0, 0, 640, 480);
    botones (500, 420, 120, 30);
    textSize(12);
    text(texto[11], 200, 450);
    text(texto[12], 380, 450);
    textSize(20);
    text(texto[9], 510, 444);
  }
}

function botones(x, y, an, al) {
  rect (x, y, an, al);
}

function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX <x+ancho && mouseY > y && mouseY < y+alto;
}
function mousePressed() {
  
 if (!musica.isPlaying()) {
        musica.loop(true);
}

  if (estado === "inicio") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img1";
      tiempo = millis();
    }
  } else if (estado === "img1") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado = "img2";
       tiempo = millis();
    }
  } else if (estado === "img2") {
    if (detectarBoton(40, 420, 120, 30)) {
      estado="img3";
       tiempo = millis();
    } if (detectarBoton(500, 420, 120, 30)) {
      estado="img6";
       tiempo = millis();
    }
  } else if (estado === "img3") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img4";
       tiempo = millis();
    }
  } else if (estado === "img4") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img5";
       tiempo = millis();
    }
  } else if (estado === "img6") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img7";
       tiempo = millis();
    }
  } else if (estado === "img7") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img8";
       tiempo = millis();
    }
  }  else if (estado === "img8" || estado === "img5") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img9";
       tiempo = millis();
    }
  }  else if (estado === "img9") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img10";
       tiempo = millis();
    }
  } else if (estado === "img11") {
    if (detectarBoton(40, 420, 120, 30)) {
      estado="img12";
       tiempo = millis();
    }if (detectarBoton(260, 420, 120, 30)) {
      estado="img13";
       tiempo = millis();
    }if (detectarBoton(500, 420,120, 30 )) {
      estado="img16";
       tiempo = millis();
    }
  }else if (estado === "img12") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
       tiempo = millis();
    }
  }else if (estado === "img16") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
       tiempo = millis();
    }
  }else if (estado === "img10") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img11";
       tiempo = millis();
    }
  }else if (estado === "img13") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img14";
       tiempo = millis();
    }
  }else if (estado === "img14") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img15";
       tiempo = millis();
    }
  }else if (estado === "img15") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="img17";
       tiempo = millis();
    }
  
     
  }else if (estado === "img17") {
    if (detectarBoton(500, 420, 120, 30)) {
      estado="inicio";
       tiempo = millis();
    }
  }
    
  
}
