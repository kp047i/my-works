import p5 from 'p5';
import { Crystal, TCrystal } from './Crystal';

type PropsType = {
  clientWidth: number;
};

interface p5Types extends p5 {
  myCustomRedrawAccordingToNewPropsHandler: (props: PropsType) => void;
}

const sketch = (p: p5Types): void => {
  const getRandomInt = (max: number) => {
    return Math.floor(p.random(max));
  };

  const crystals: TCrystal[] = [];
  const backgroundColor = '#212D40';
  const numRings = 3;
  const crystalPerRing = 3;
  const numCrystal = numRings * crystalPerRing;
  const radius = 80;
  let time = 0;
  p.setup = () => {
    const canvasWidth = p.min(p.windowWidth, 768);
    p.createCanvas(canvasWidth, canvasWidth * 0.7);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    for (let ringI = 1; ringI < numRings + 1; ringI += 1) {
      for (let crystalJ = 0; crystalJ < crystalPerRing; crystalJ += 1) {
        const angle = getRandomInt(360);
        const crystal = new Crystal(
          ringI * radius * p.cos(angle),
          ringI * radius * p.sin(angle),
          p.random(0.01, 0.015),
          angle,
          ringI * radius,
          p.random(15, 50),
        );
        crystals.push(crystal);
      }
    }
  };

  const tree = (length: number) => {
    p.stroke(43, 17, 99, 100);
    p.strokeWeight(2);
    p.line(0, 0, 0, length);
    p.line(
      0,
      length / 5,
      length * 0.4 * p.cos(p.radians(60)),
      length * 0.2 + length * 0.4 * p.sin(p.radians(60)),
    );
    p.line(
      0,
      length / 5,
      length * 0.4 * p.cos(p.radians(120)),
      length * 0.2 + length * 0.4 * p.sin(p.radians(60)),
    );
    p.line(
      0,
      length * 0.7,
      length * 0.2 * p.cos(p.radians(60)),
      length * 0.7 + length * 0.2 * p.sin(p.radians(60)),
    );
    p.line(
      0,
      length * 0.7,
      length * 0.2 * p.cos(p.radians(120)),
      length * 0.7 + length * 0.2 * p.sin(p.radians(60)),
    );
  };

  const crystal = (x: number, y: number, length: number) => {
    p.push();
    p.translate(x, y);
    for (let i = 0; i < 4; i += 1) {
      p.rotate(p.radians(i * 60));
      for (let j = 0; j < 2; j += 1) {
        p.rotate(p.radians(j * 60));
        tree(length);
      }
    }
    p.pop();
  };

  p.draw = () => {
    p.background(backgroundColor);
    p.push();
    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < numCrystal; i += 1) {
      p.fill(255);
      crystals[i].update();
      time += 0.0001;
      p.rotate(time);
      crystal(
        crystals[i].position.x,
        crystals[i].position.y,
        crystals[i].length,
      );
    }
    p.stroke(43, 17, 99, 100);
    p.noFill();
    for (let i = 0; i < numRings; i += 1) {
      p.circle(0, 0, radius * (i + 1) * 2);
    }
    p.pop();
  };

  p.mouseClicked = () => {
    p.redraw();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props: PropsType) => {
    if (props.clientWidth !== null) {
      p.resizeCanvas(props.clientWidth, props.clientWidth * 0.7);
    }
  };
};

export default sketch;
