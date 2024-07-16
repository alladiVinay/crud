import React from "react";
import DraggableItem from "./DraggableItem";
import "./Toolbar.css";

const components = [
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "button", label: "Button" },
];

interface ToolbarProps {
  addComponent: (component: { type: string; label: string }) => void;
}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className="toolbar">
      {components.map((component, index) => (
        <DraggableItem key={index} component={component} />
      ))}
    </div>
  );
};

export default Toolbar;
