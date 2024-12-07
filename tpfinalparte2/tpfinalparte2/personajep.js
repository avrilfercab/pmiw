class personajep {
  constructor(imgAuto) {
    this.butters = imgAuto[0];
    this.posy = 400;
    this.posx = 240;
    this.vida = true;
  }


  dibujar() {
    if (this.vida) {
      image(this.butters, this.posx, this.posy, 80, 100)
    }
  }
  teclapresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverizq();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverder();
    }
  }

  moverizq() {
    if (this.posx > 210) {
      this.posx -= 15;
    }
  }


  moverder() {
    if (this.posx < 420) {
      this.posx += 15;
    }
  }

  hachocado(autoenemigos) {
    if (dist(this.posx, this.posy, autoenemigos.posx, autoenemigos.posy) <30) {
      this.estamuerto();
    }
  }

  estamuerto() {
    this.vida = false;
    objjuego.estado = "perdio";
  }
}
