import React from "react";
import "./image-label.css";
interface IContainer {
    width?: number;
    height?: number;
}
interface IPoint {
    width?: number;
    color?: string;
}
type Point = {
    x: number;
    y: number;
};
interface IImageLabel {
    url: string;
    containerProps?: IContainer;
    lineWidth?: number;
    lineColor?: string;
    pointProps?: IPoint;
    getPoints?: (points: Point[]) => void;
}
declare const ImageLabel: React.FC<IImageLabel>;
export default ImageLabel;
