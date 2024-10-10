import React from "react";
import "./Loader.css"; 

interface LoaderProps {
  type: "spinner" | "progress-bar";
  progress?: number; 
  className?: string;
}

const LoaderComponent: React.FC<LoaderProps> = ({ type, progress = 0, className }) => {

    const dynamicClassName = `${type} ${className || ''}`.trim();

    if (type === "spinner") {
        return (
            <div className="spinner-circle">
                <div className={dynamicClassName}></div>
            </div>
        );
    } else if (type === "progress-bar") {
        return (
            <div className="progress-bar-container">
                <div className={dynamicClassName} style={{ width: `${progress}%` }}>
                    {progress}%
                </div>
            </div>
        );
    }
    return null;
};

export default LoaderComponent;
