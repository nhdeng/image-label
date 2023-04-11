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
        url="https://stbrain.kjt.zj.gov.cn/Documents/ac681331-de00-4fcb-b082-27159b32f6c5/Instruments/43%20%E7%A2%B3%E7%A1%AB%E5%88%86%E6%9E%90%E4%BB%AA.jpg"
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
