class autoenemigos {
  constructor() {
    this.posy = -10;
    this.posx1 = 210;
    this.posx2 = 420;
    this.posx = random(this.posx1, this.posx2);
    this.micolor = color(0, 0, 255);
    this.vel = 5;
    this.colisiona = false;
  }


  dibujar() {
    fill(this.micolor);
    noStroke();
    rect(this.posx, this.posy, 30, 50);
  }
  moverhaciaabajo() {
    this.posy += this.vel;
  }

  reiniciar() {

    if (this.posy >= height +10) {
      this.posx = (random(this.posx1, this.posx2));
      this.posy = -10;
      contador += 1;
      print(contador);
    }
  }
}
