import React from "react";
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
declare const ImageLabel: React.FC<IImageLabel>;
export default ImageLabel;
