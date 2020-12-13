import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

import { Particle, ParticleType } from './Particle';

type PropsType = {
  width: number;
};

const MovingDots: React.FC<PropsType> = (props) => {
  const { width } = props;
  const particles: ParticleType[] = [];
  const backgroundColor = '#212D40';
  let canvasWidth: number;
  let time: number;
  let numParticles: number;
  let distanceRange: number;

  const setup = (p5: p5Types, parentRef: Element) => {
    canvasWidth = p5.min(width, 768);
    numParticles = p5.min(width / 10, 50);
    p5.createCanvas(canvasWidth, canvasWidth * 0.5).parent(parentRef);
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
    distanceRange = p5.min(p5.width / 10, 50);
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
  };

  const windowResized = (p5: p5Types) => {
    canvasWidth = p5.min(width, 768);
    p5.resizeCanvas(canvasWidth, canvasWidth * 0.5);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default MovingDots;
