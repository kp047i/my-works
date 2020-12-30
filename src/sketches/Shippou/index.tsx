import React, { useRef, useCallback } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import recorder from 'react-canvas-recorder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faStop } from '@fortawesome/free-solid-svg-icons';
import sketch from './sketch';

type PropsType = {
  clientWidth: number;
};

const SketchWrapper: React.FC<PropsType> = (props) => {
  const { clientWidth } = props;

  const ref = useRef();

  const startRecording = useCallback(() => {
    const canvas = document.getElementById(
      'defaultCanvas0',
    ) as HTMLCanvasElement;
    recorder.createStream(canvas);
    recorder.start();
  }, []);

  const stopRecording = useCallback(() => {
    recorder.stop();
    const file = recorder.save();
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shippou.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <div className="sketchwrapper">
      <P5Wrapper sketch={sketch} clientWidth={clientWidth} ref={ref} />
      <div className="mt-4">
        <button
          type="button"
          onClick={startRecording}
          className="rounded-full bg-copper text-white p-4"
        >
          <FontAwesomeIcon icon={faVideo} />
          <span className="ml-2">録画開始</span>
        </button>
        <button
          type="button"
          onClick={stopRecording}
          className="rounded-full bg-copper text-white p-4 ml-4"
        >
          <FontAwesomeIcon icon={faStop} />
          <span className="ml-2">録画停止</span>
        </button>
      </div>
    </div>
  );
};

export default SketchWrapper;
