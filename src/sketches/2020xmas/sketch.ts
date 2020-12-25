import p5 from 'p5';

type PropsType = {
  clientWidth: number;
};

interface p5Types extends p5 {
  myCustomRedrawAccordingToNewPropsHandler: (props: PropsType) => void;
}

const sketch = (p: p5Types): void => {
  const backgroundColor = '#212D40';
  p.setup = () => {
    const canvasWidth = p.min(p.windowWidth, 768);
    p.createCanvas(canvasWidth, canvasWidth * 0.5);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.stroke(210, 60, 90, 100);
    p.noLoop();
  };

  const tree = (length: number) => {
    p.strokeWeight(Math.ceil(length / 20));
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

  const crystal = (randomLength: number) => {
    for (let i = 0; i < 4; i += 1) {
      p.rotate(p.radians(i * 60));
      for (let j = 0; j < 2; j += 1) {
        p.rotate(p.radians(j * 60));
        tree(randomLength);
      }
    }
  };

  p.draw = () => {
    p.background(backgroundColor);
    for (let i = 0; i < 30; i += 1) {
      p.push();
      p.translate(p.random(0, p.width), p.random(0, p.height));
      crystal(p.random(10, 30));
      p.pop();
    }
  };

  p.mouseClicked = () => {
    p.redraw();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props: PropsType) => {
    if (props.clientWidth !== null) {
      p.resizeCanvas(props.clientWidth, props.clientWidth * 0.5);
    }
  };
};

export default sketch;
