import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

import { Particle, ParticleType } from './Particle';

const MovingDots: React.FC = () => {
  const particles: ParticleType[] = [];
  const backgroundColor = '#212D40';
  const numParticles = 40;
  let time: number;

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(400, 400).parent(parentRef);
    p5.background(backgroundColor);

    time = p5.random(0, 255);

    for (let i = 0; i < numParticles; i += 1) {
      const particle = new Particle(
        p5.random(0, p5.width),
        p5.random(0, p5.height),
        p5.random(-1, 1),
        p5.random(-1, 1),
      );
      particles.push(particle);
    }
  };

  const draw = (p5: p5Types) => {
    const distanceRange = 40;
    p5.colorMode(p5.RGB);
    p5.background(backgroundColor);

    p5.colorMode(p5.HSB, 360, 100, 100, 1);
    time += 1;
    if (time > 360) time = 0;

    for (let i = 0; i < numParticles - 1; i += 1) {
      particles[i].update(p5.width, p5.height);
      for (let j = 0; j < numParticles - 1; j += 1) {
        if (
          i !== j &&
          p5.dist(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y,
          ) < distanceRange
        ) {
          p5.noStroke();
          p5.fill(time, 70, 70, 0.7);
          p5.circle(
            particles[i].position.x,
            particles[i].position.y,
            particles[i].size,
          );
          p5.strokeWeight(1);
          p5.stroke(time, 70, 70, 0.7);
          p5.line(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y,
          );
        }
      }
    }
    p5.noFill();
    p5.stroke('#FEF6E3');
    p5.strokeWeight(4);
    p5.rect(0, 0, p5.width, p5.height);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MovingDots;
