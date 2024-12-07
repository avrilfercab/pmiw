class juego {
  constructor() {
    this.estado = "inicio";
    this.crearpantallas()
    this.crearpersonajep();
    this.crearautoenemigos ();
    this.tiempo = millis();
    this.tiempolimite = 30;
    this.tiempoactual = (millis() - this.tiempo) / 1000;
  }


  dibujar() {
    this.personajep.dibujar();
    this.autoenemigos.dibujar();
    this.personajep.hachocado(this.autoenemigos);
  }

  crearpersonajep() {
    this.personajep = new personajep(autos);
  }

  crearautoenemigos() {
    this.autoenemigos = new autoenemigos(autos);
  }

  reiniciarautoenemigos() {
    this.autoenemigos.moverhaciaabajo();
    this.autoenemigos.reiniciar();
  }

  teclapresionada(keyCode) {
    this.personajep.teclapresionada(keyCode);
  }

  crearpantallas() {
    this.pantalla = new pantalla(pantallas, texto);
  }
}
