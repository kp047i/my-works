import p5 from 'p5';

type PropsType = {
  clientWidth: number;
};

interface p5Types extends p5 {
  myCustomRedrawAccordingToNewPropsHandler: (props: PropsType) => void;
}

const sketch = (p: p5Types): void => {
  const navy = '#212D40';
  const latte = '#fdf1d3';
  const numTile = 10;
  let len: number;
  p.setup = () => {
    p.createCanvas(500, 500);
    p.rectMode(p.CENTER);
    len = p.width / numTile;
  };

  const art1 = () => {
    p.background(latte);
    p.fill(navy);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 1) {
          p.translate(len * i, len * j);
          p.rotate(rad);
          p.rect(0, 0, len, len);
          p.resetMatrix();
        }
      }
    }
  };

  const art2 = () => {
    p.background(navy);
    p.fill(latte);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 0) {
          p.translate(len * i, len * j);
          p.rotate(rad);
          p.rect(0, 0, len, len);
          p.resetMatrix();
        }
      }
    }
  };

  p.draw = () => {
    // if (p.frameCount % 180 < 90) art1();
    // else art2();
  };

  p.mouseClicked = () => {
    p.redraw();
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = (props: PropsType) => {
  //   if (props.clientWidth !== null) {
  //     p.resizeCanvas(props.clientWidth, props.clientWidth * 0.7);
  //   }
  // };
};

export default sketch;
