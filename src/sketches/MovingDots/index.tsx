import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

type PropsType = {
  clientWidth: number;
};

const SketchWrapper: React.FC<PropsType> = (props) => {
  const { clientWidth } = props;

  return (
    <div className="sketchwrapper">
      <P5Wrapper sketch={sketch} clientWidth={clientWidth} />
    </div>
  );
};

export default SketchWrapper;
