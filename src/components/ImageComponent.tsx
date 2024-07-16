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
  previewMode: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  component,
  previewMode,
}) => {
  const [src, setSrc] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="image-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
    >
      {previewMode ? (
        src && <img src={src} alt="Uploaded" />
      ) : (
        <>
          <input type="file" onChange={handleFileChange} />
          {src && <img src={src} alt="Uploaded" />}
        </>
      )}
    </div>
  );
};

export default ImageComponent;
