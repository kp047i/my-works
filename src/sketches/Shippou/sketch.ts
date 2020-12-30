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
  const numTile = 5;
  let len: number;
  p.setup = () => {
    p.createCanvas(300, 300);
    p.frameRate(30);
    len = p.width / numTile;
  };

  const leaf = () => {
    p.fill(latte);
    p.push();
    p.beginShape();
    for (let theta = 0; theta < 90; theta += 1) {
      p.vertex(
        len * p.pow(p.cos(p.radians(theta)), 3),
        len * p.pow(p.sin(p.radians(theta)), 3),
      );
    }
    p.endShape(p.CLOSE);
    p.translate(len, len);
    p.beginShape();
    p.stroke(latte);
    for (let theta = 180; theta < 270; theta += 1) {
      p.vertex(
        len * p.pow(p.cos(p.radians(theta)), 3),
        len * p.pow(p.sin(p.radians(theta)), 3),
      );
    }
    p.endShape(p.CLOSE);
    p.pop();
  };

  const twoLeaf = () => {
    p.push();
    // p.translate(0, len);
    p.translate(len, 0);
    for (let i = 0; i < 2; i += 1) {
      p.rotate(p.radians(90));
      leaf();
    }
    p.pop();
  };

  const flower = () => {
    p.push();
    for (let i = 0; i < 2; i += 1) {
      p.rotate(p.radians(180 * i));
      twoLeaf();
    }
    p.pop();
  };

  const art1 = () => {
    p.background(latte);
    p.fill(navy);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 1) {
          p.translate(len * i + len / 2, len * j + len / 2);
          p.rotate(rad);
          p.beginShape();
          p.noStroke();
          for (let theta = 0; theta < 360; theta += 1) {
            p.vertex(
              len * p.pow(p.cos(p.radians(theta)), 3),
              len * p.pow(p.sin(p.radians(theta)), 3),
            );
          }
          p.endShape(p.CLOSE);
          p.resetMatrix();
        }
      }
    }
  };

  const art2 = () => {
    p.background(navy);
    const rad = p.map(p.frameCount % 90, 0, 89, 0, p.PI / 2);
    for (let i = 0; i < numTile + 1; i += 1) {
      for (let j = 0; j < numTile + 1; j += 1) {
        if ((i + j) % 2 === 0) {
          p.translate(len * i + len / 2, len * j + len / 2);
          p.rotate(rad);
          flower();
          p.resetMatrix();
        }
      }
    }
  };

  p.draw = () => {
    if (p.frameCount % 180 < 90) art1();
    else art2();
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
