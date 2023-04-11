import React, { useRef, useEffect, useState } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

const ImageZoom: React.FC<Props> = ({ src, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
    };
  }, [src, width, height]);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(img, 0, 0, width * scale, height * scale);
    };
  }, [src, width, height, scale]);

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
};

export default ImageZoom;
