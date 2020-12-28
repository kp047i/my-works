import p5Types from 'p5';

export type TCrystal = {
  position: p5Types.Vector;
  angularV: number;
  angle: number;
  radius: number;
  length: number;
  update: () => void;
};

export class Crystal {
  position: p5Types.Vector;
  angularV: number;
  angle: number;
  radius: number;
  length: number;

  constructor(
    x: number,
    y: number,
    angularV: number,
    angle: number,
    radius: number,
    length: number,
  ) {
    this.position = new p5Types.Vector();
    this.position.x = x;
    this.position.y = y;
    this.angularV = angularV;
    this.angle = angle;
    this.radius = radius;
    this.length = length;
  }

  update(): void {
    this.angle += this.angularV;
    this.position.x = this.radius * p5Types.prototype.cos(this.angle);
    this.position.y = this.radius * p5Types.prototype.sin(this.angle);
  }
}
