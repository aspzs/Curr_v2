import React, { useEffect } from 'react';
import Sketch from 'react-p5';

const MySketch = () => {
  let slowEllipseX = 0;
  let slowEllipseY = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef).position(0, 0).style('z-index', '-3');
  };

  const draw = (p5) => {
    p5.background(255);
    let gridSize = window.innerWidth / 10;

    for (let x = -gridSize; x <= p5.width + gridSize; x += gridSize) {
      for (let y = -gridSize; y <= p5.height + gridSize; y += gridSize) {
        let distance = p5.dist(x, y, p5.mouseX, p5.mouseY);
        let lineLength = gridSize;

        if (distance < 700) {
          p5.push();
          p5.translate(x, y);
          let angle = p5.atan2(p5.mouseY - y, p5.mouseX - x);
          let stretch = p5.map(distance, 0, 100, 1.5, 0.5);
          p5.rotate(angle);
          drawLine(p5, -lineLength * stretch, lineLength * stretch);
          p5.pop();
        } else {
          p5.push();
          p5.translate(x, y);
          drawLine(p5, 0, lineLength);
          p5.pop();
        }
      }
    }

    p5.fill(235);
    p5.ellipse(p5.mouseX, p5.mouseY-50, 30);
  };

  const drawLine = (p5, start, end) => {
    p5.stroke(255);
    p5.line(start / 10, 0, end / 28, 0);
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    const handleResize = () => windowResized();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default MySketch;
