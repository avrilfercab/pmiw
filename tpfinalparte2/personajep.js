 Avril Fernandez Cabrera 112709
class personajep {
  constructor() {
    this.posy = 400;
    this.posx = 240;
    this.vida = true;
    this.micolor = color(255, 0, 0);
  }


  dibujar() {
    if (this.vida) {
      fill(this.micolor);
      noStroke();
      rect(this.posx, this.posy, 30, 50);
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
    estado = "perdio";
  }
}
