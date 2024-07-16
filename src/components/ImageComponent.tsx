import React, { useState } from "react";
import "./ImageComponent.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface ImageComponentProps {
  component: Component; // Props for the component data (id, type, position)
  previewMode: boolean; // Flag indicating if in preview mode
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  component,
  previewMode,
}) => {
  const [src, setSrc] = useState(""); // State to hold the image source

  // Handles file change when selecting an image file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSrc(reader.result as string); // Sets the image source to the loaded file
      };
      reader.readAsDataURL(file); // Reads the selected file as a data URL
    }
  };

  return (
    <div
      className="image-component"
      style={{ position: "absolute", left: component.left, top: component.top }} // Positions the component based on props
    >
      {previewMode ? ( // Renders different content based on preview mode flag
        src && <img src={src} alt="Uploaded" /> // Displays the image if src is defined
      ) : (
        <>
          {/* Fragment used to group elements */}
          <input type="file" onChange={handleFileChange} />
          {/* Input for selecting image file */}
          {src && <img src={src} alt="Uploaded" />}
          {/* Displays the uploaded image */}
        </>
      )}
    </div>
  );
};

export default ImageComponent;
