import React, { useState } from "react";
import "./ImageComponent.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface ImageComponentProps {
  component: Component;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ component }) => {
  const [src, setSrc] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
      className="image-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
    >
      <input type="file" onChange={handleChange} />
      {src && <img src={src} alt="Uploaded" />}
    </div>
  );
};

export default ImageComponent;
