import React, { useState } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

const SketchWrapper: React.FC = () => {
  const [state, _setState] = useState({ y: 0, direction: '^' });

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(200, 200).parent(parentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.fill(255, state.y * 1.3, 0);
    p5.ellipse(p5.width / 2, state.y, 50);
    if (state.y > p5.height) state.direction = '';
    if (state.y < 0) {
      state.direction = '^';
    }
    if (state.direction === '^') state.y += 8;
    else state.y -= 4;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default SketchWrapper;
