let canvas = document.getElementById('canvas');
let s = document.getElementById('s');
///////////////variable////////////
let score = 0;
let c = canvas.getContext('2d');
let cw = innerWidth;
let ch = innerHeight;
canvas.width = cw;
canvas.height = ch;
let w = 60;
let h = 140;

let m = new Audio();
m.src = 'music.mp3';
let ani;
// mouse pointer//////// event 
let mouse = {
  x: undefined,
  y: undefined

}
/// event listner///////////
window.addEventListener('click', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  music();

})
/// array///////////
let en = [];

/////// Tile class ////////////
class Tile {
  constructor(x, y, vel) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 120
    this.vel = vel;
  }
  draw() {
    c.beginPath();
    c.fillRect(this.x, this.y, this.w, this.h)
    c.stroke();

    if (this.y + this.h >= ch) {
      location.reload();
      cancelAnimationFrame(ani)
    }
  }
  update() {
    this.draw();
    this.x = this.x + this.vel.x;
    this.y = this.y + this.vel.y
  }
}
//tili function
function tile(e) {
  setInterval(() => {

    let x = Math.random() * 310;
    let y = 10;

    //c.beginPath();
    //c.fillRect(x, y, w, h)
    //  c.stroke();
    //y += 1

    en.push(new Tile(x, y, {
      x: 0,
      y: 6
    }))
  }, 1500)

}
// samll useless music function
function music() {
  m.play();
}

// Animation function lol
function Animate() {
  ani = requestAnimationFrame(Animate);
  c.clearRect(0, 0, cw, ch);
  en.forEach((ens, i) => {
    ens.update()
    if (mouse.x - ens.x < 50 && mouse.x - ens.x > -50 && mouse.y - ens.y < 50 && mouse.y - ens.y > -50) {
      en.splice(i, 1);
      s.innerHTML++;
    }
  });

}
/// call function here
Animate();
tile();
