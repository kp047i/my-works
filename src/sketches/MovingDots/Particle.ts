import p5Types from 'p5';

import { nanoid } from 'nanoid';

export type ParticleType = {
  position: p5Types.Vector;
  velocity: p5Types.Vector;
  size: number;
  update: (width: number, height: number) => void;
};

export class Particle {
  id: string;
  position: p5Types.Vector;
  velocity: p5Types.Vector;
  size: number;
  constructor(x: number, y: number, velX: number, velY: number) {
    this.id = nanoid();
    this.position = new p5Types.Vector();
    this.velocity = new p5Types.Vector();
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = velX;
    this.velocity.y = velY;
    this.size = 8;
  }

  update(width: number, height: number): void {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width) this.velocity.x *= -1;
    if (this.position.y < 0 || this.position.y > height) this.velocity.y *= -1;
  }
}
