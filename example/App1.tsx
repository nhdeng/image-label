import React, { useState, createRef, useEffect } from "react";
import LabelImage from "../packages/image-label";
import "./App.css";

type Point = {
  x: number;
  y: number;
};

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const getPoints = (points: Point[]) => {
    setPoints(points);
  };
  const ref = createRef();

  const onReset = () => {
    ref.current.onReset();
  };
  useEffect(() => {
    ref.current.setPoints([]);
  }, []);

  const set = () => {
    ref.current.setPoints([
      { x: 403, y: 479 },
      { x: 1245, y: 338 },
      { x: 2218, y: 400 },
      { x: 0, y: 400 },
    ]);
  };
  return (
    <div className="App">
      <LabelImage
        ref={ref}
        getPoints={getPoints}
        // fullScreen={true}
        url="https://hddata.cn/image/banner/591117aeb51902c8b5e4f6ea50ccc0e7.png"
      />
      <div className="footer">
        <h3 onClick={() => set()}>固定点设置</h3>
        <h3 onClick={() => onReset()}>重置</h3>
        <h3>坐标点信息:</h3>
        {points.length > 0 && (
          <ul className="points">
            {points.map((point) => (
              <li key={point.x + point.y}>
                {point.x}, {point.y}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
