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
interface ILine {
    width?: number;
    color?: string;
}
interface IImageLabel extends React.HTMLAttributes<HTMLDivElement> {
    url: string;
    containerProps?: IContainer;
    lineProps?: ILine;
    pointProps?: IPoint;
    getPoints?: (pInfo: any) => void;
    fullScreen?: boolean;
}
declare const ImageLabel: React.FC<IImageLabel>;
export default ImageLabel;
