class autoenemigos {
  constructor(imgAuto) {
    this.auto = imgAuto[1];
    this.posy = -10;
    this.posx1 = 210;
    this.posx2 = 420;
    this.posx = random(this.posx1, this.posx2);
    this.vel = 6;
    this.colisiona = false;
  }


  dibujar() {
    image(this.auto, this.posx, this.posy, 80, 100)
  }
  moverhaciaabajo() {
    this.posy += this.vel;
  }

  reiniciar() {

    if (this.posy >= height +10) {
      this.posx = (random(this.posx1, this.posx2));
      this.posy = -10;
      this.vel += 0.05// los enemigos van aumentando su velocidad
    }
  }
}
