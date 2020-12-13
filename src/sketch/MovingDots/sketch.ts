import p5Types from 'p5';

import { Particle, ParticleType } from './Particle';

type PropsType = {
  clientWidth: number;
};

const sketch = (p: p5Types): void => {
  const particles: ParticleType[] = [];
  const backgroundColor = '#212D40';
  let canvasWidth: number;
  let time: number;
  let numParticles: number;
  let distanceRange: number;
  p.setup = () => {
    canvasWidth = p.min(p.windowWidth, 768);
    numParticles = p.min(p.windowWidth / 10, 50);
    distanceRange = p.min(p.windowWidth / 10, 50);
    p.createCanvas(canvasWidth, canvasWidth * 0.5);
    p.background(backgroundColor);
    time = p.random(0, 255);

    for (let i = 0; i < numParticles; i += 1) {
      const particle = new Particle(
        p.random(0, p.width),
        p.random(0, p.height),
        p.random(-1, 1),
        p.random(-1, 1),
      );
      particles.push(particle);
    }
  };

  const resetParticlePosition = (width: number) => {
    particles.forEach((particle) => {
      particle.position.x = p.random(0, width);
      particle.position.y = p.random(0, width / 2);
    });
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props: PropsType) => {
    if (props.clientWidth !== null) {
      resetParticlePosition(props.clientWidth);
      numParticles = p.min(props.clientWidth / 10, 50);
      distanceRange = p.min(props.clientWidth / 10, 50);
      p.resizeCanvas(props.clientWidth, props.clientWidth * 0.5);
    }
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.colorMode(p.RGB);
    p.background(backgroundColor);

    p.colorMode(p.HSB, 360, 100, 100, 1);
    time += 1;
    if (time > 360) time = 0;

    for (let i = 0; i < numParticles - 1; i += 1) {
      particles[i].update(p.width, p.height);
      for (let j = 0; j < numParticles - 1; j += 1) {
        if (
          i !== j &&
          p.dist(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y,
          ) < distanceRange
        ) {
          p.noStroke();
          p.fill(time, 70, 70, 0.7);
          p.circle(
            particles[i].position.x,
            particles[i].position.y,
            particles[i].size,
          );
          p.strokeWeight(1);
          p.stroke(time, 70, 70, 0.7);
          p.line(
            particles[i].position.x,
            particles[i].position.y,
            particles[j].position.x,
            particles[j].position.y,
          );
        }
      }
    }
  };
};

export default sketch;
