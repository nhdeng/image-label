import React, { useState } from "react";
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
  return (
    <div className="App">
      <LabelImage
        getPoints={getPoints}
        url="https://stbrain.kjt.zj.gov.cn/Documents/ac681331-de00-4fcb-b082-27159b32f6c5/Instruments/43%20%E7%A2%B3%E7%A1%AB%E5%88%86%E6%9E%90%E4%BB%AA.jpg"
      />
      <div className="footer">
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
