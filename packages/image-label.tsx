import React, { useEffect, useRef, useState } from "react";
import "./image-label.css";

interface IContainer {
  width?: number;
  height?: number;
}

interface IPoint {
  size?: number;
  color?: string;
}

type Point = {
  x: number;
  y: number;
};

interface ILine {
  width?: number;
  color?: string;
}

interface IImageLabel {
  url: string;
  containerProps?: IContainer;
  lineProps?: ILine;
  pointProps?: IPoint;
  getPoints?: (points: Point[]) => void;
}

const _cw_ = 1000; // 默认容器宽度
const _ch_ = 800; // 默认容器高度
const points: Point[] = []; // 坐标点
let __img_scale_ = 1; // 容器中的图片相对于原始图的缩放倍数
let ctx = {} as CanvasRenderingContext2D;
let img = {} as HTMLImageElement;
let currentSelectedPointIndex = -1;

const ImageLabel: React.FC<IImageLabel> = ({
  url,
  lineProps,
  containerProps,
  pointProps,
  getPoints,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    loadPictureAndInitCanvas();
    canvas.current?.addEventListener("wheel", mouseWhell);
    canvas.current?.addEventListener("mousedown", listenMouseDown);
    return () => {
      canvas.current?.removeEventListener("wheel", mouseWhell);
      canvas.current?.removeEventListener("mousedown", listenMouseDown);
    };
  }, []);
  // 鼠标按下事件监听
  const listenMouseDown = (e: MouseEvent) => {
    if (!canvas.current) {
      return;
    }
    const { clientX, clientY, x, y, offsetX, offsetY } = e;
    // 画布距离原点的位置
    const spaceX = clientX - canvas.current.offsetLeft || 0;
    const spaceY = clientY - canvas.current.offsetTop || 0;
    points.forEach((point, index) => {
      const scalePoint = { x: point.x * getScale(), y: point.y * getScale() };
      const isSelected =
        Math.abs(offsetX - scalePoint.x) <= 20 &&
        Math.abs(offsetY - scalePoint.y) <= 20;
      if (isSelected) {
        currentSelectedPointIndex = index;
      }
    });
    // 选中点 拖拽点
    if (currentSelectedPointIndex >= 0) {
      canvas.current.onmousemove = function (event) {
        points[currentSelectedPointIndex].x = event.offsetX / getScale();
        points[currentSelectedPointIndex].y = event.offsetY / getScale();
        ctx.clearRect(
          0,
          0,
          img.clientWidth * getScale(),
          img.clientHeight * getScale()
        );
        ctx.drawImage(
          img,
          0,
          0,
          img.clientWidth * getScale(),
          img.clientHeight * getScale()
        );
        mouseWhellDrawPointAndLine(getScale());
      };
    } else {
      // 未选中点 拖拽画布
      document.onmousemove = function (event) {
        if (!canvas.current) {
          return;
        }
        const left = event.clientX - spaceX;
        const top = event.clientY - spaceY;
        canvas.current.style.left = left + "px";
        canvas.current.style.top = top + "px";
      };
    }
    document.onmouseup = function () {
      if (!canvas.current) {
        return;
      }
      document.onmousemove = null;
      canvas.current.onmousemove = null;
      document.onmouseup = null;
      currentSelectedPointIndex = -1;
    };
  };
  // 鼠标滚动事件监听
  const mouseWhell = (e: MouseEvent) => {
    e.preventDefault();
    mouseWheelDrawPicture(e);
    mouseWhellDrawPointAndLine(getScale());
  };
  // 绘制图片
  const mouseWheelDrawPicture = (e: MouseEvent) => {
    /**
     * deltaY 正值:向下滚动 缩小; 负值:向上滚动 放大
     */
    let top = 0;
    let left = 0;
    // @ts-ignore
    const { deltaY, offsetX, offsetY } = e;
    if (deltaY < 0 && getScale() < 5 && canvas?.current) {
      img.style.scale = JSON.stringify(getScale() + 0.1);
      // 计算出这次放大相比于上一次调整了canvas多少的offsetTop和offsetLeft
      left =
        canvas.current?.offsetLeft -
        ((offsetX * getScale()) / (getScale() - 0.1) - offsetX);
      top =
        canvas.current.offsetTop -
        ((offsetY * getScale()) / (getScale() - 0.1) - offsetY);
      canvas.current.style.left = left + "px";
      canvas.current.style.top = top + "px";
      canvas.current.style.width = img.clientWidth * getScale() + "px";
      canvas.current.style.height = img.clientHeight * getScale() + "px";
      canvas.current.width = img.clientWidth * getScale();
      canvas.current.height = img.clientHeight * getScale();
    }
    if (deltaY >= 0 && getScale() - 0.1 >= 0.1 && canvas?.current) {
      img.style.scale = JSON.stringify(getScale() - 0.1);
      // 计算出这次缩小相比于上一次调整了canvas多少的offsetTop和offsetLeft
      left =
        canvas.current.offsetLeft -
        (offsetX * getScale()) / (getScale() + 0.1) +
        offsetX;
      top =
        canvas.current.offsetTop -
        (offsetY * getScale()) / (getScale() + 0.1) +
        offsetY;

      canvas.current.style.left = left + "px";
      canvas.current.style.top = top + "px";
      canvas.current.style.width = img.clientWidth * getScale() + "px";
      canvas.current.style.height = img.clientHeight * getScale() + "px";
      canvas.current.width = img.clientWidth * getScale();
      canvas.current.height = img.clientHeight * getScale();
    }

    ctx.drawImage(
      img,
      0,
      0,
      img.clientWidth * getScale(),
      img.clientHeight * getScale()
    );
  };
  // 获取图片缩放倍数
  const getScale = (): number => {
    return Number(img.style.scale);
  };
  // 加载图片并初始化画布
  const loadPictureAndInitCanvas = () => {
    ctx = canvas?.current?.getContext("2d") as CanvasRenderingContext2D;
    setLoading(true);
    img = document.createElement("img");
    img.setAttribute("alt", "trace img");
    img.setAttribute("id", "img");
    img.setAttribute("src", url);
    // image loaded
    img.onload = function () {
      setLoading(false);
      container.current?.append(img);
      const { width, height } = img;
      if (width > height) {
        img.style.width = "80%";
      } else {
        img.style.height = "80%";
      }
      // 容器中的图片尺寸
      const { clientWidth, clientHeight } = img;
      __img_scale_ = clientWidth / width;
      if (canvas.current) {
        canvas.current.style.width = clientWidth + "px";
        canvas.current.style.height = clientHeight + "px";
        canvas.current.width = clientWidth;
        canvas.current.height = clientHeight;
        canvas.current.style.left = `calc(50% - ${clientWidth / 2}px)`;
        canvas.current.style.top = `calc(50% - ${clientHeight / 2}px)`;
      }
      ctx.drawImage(img, 0, 0, clientWidth, clientHeight);
      img.style.scale = "1";
      initPoints(clientWidth, clientHeight);
      mouseWhellDrawPointAndLine(1);
    };
    // image load error
    img.onerror = function () {
      setLoading(false);
      setLoadingError(true);
    };
  };

  // 默认点加载， 默认取画布中心点80%的正方形区域
  const initPoints = (width: number, height: number) => {
    if (points.length > 0) {
      return;
    }
    const leftTop = { x: width * 0.2, y: height * 0.2 };
    const rightTop = { x: width * 0.8, y: height * 0.2 };
    const rightBottom = { x: width * 0.8, y: height * 0.8 };
    const leftBottom = { x: width * 0.2, y: height * 0.8 };
    points.push(leftTop);
    points.push(rightTop);
    points.push(rightBottom);
    points.push(leftBottom);
  };

  // 获取图片上的原始坐标点
  const getOriginPoints = () => {
    if (!points.length) {
      console.error("画布暂时没有初始化");
      return [];
    }
    return points.map(({ x, y }) => ({
      x: Number((x / __img_scale_).toFixed(2)),
      y: Number((y / __img_scale_).toFixed(2)),
    }));
  };

  // 鼠标滚动绘制点线
  const mouseWhellDrawPointAndLine = (scale: number) => {
    if (!points.length) {
      return;
    }
    // 点
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(
        point.x * scale,
        point.y * scale,
        pointProps?.size || 10,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = pointProps?.color || "red";
      ctx.fill();
      ctx.closePath();
    });
    ctx.beginPath();
    ctx.lineWidth = lineProps?.width || 2;
    ctx.strokeStyle = lineProps?.color || "red";
    // 线
    points.forEach(({ x, y }) => {
      ctx.lineTo(x * scale, y * scale);
    });
    ctx.lineTo(points[0].x * scale, points[0].y * scale);
    ctx.stroke();
    // 执行获取坐标点的回调
    getPoints && getPoints(getOriginPoints());
  };

  return (
    <div
      ref={container}
      className="label-image__container"
      style={{
        width: `${containerProps?.width || _cw_}px`,
        height: `${containerProps?.height || _ch_}px`,
      }}
    >
      <canvas ref={canvas} className="label-image__canvas" />
    </div>
  );
};

export default ImageLabel;
