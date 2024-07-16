import React from "react";
import { useDrag } from "react-dnd";
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
    // <div className="toolbar">
    <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
      {components.map((component, index) => (
        <ToolbarItem key={index} component={component} />
      ))}
    </div>
  );
};

interface ToolbarItemProps {
  component: { type: string; label: string };
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({ component }) => {
  const [, drag] = useDrag({
    type: "component",
    item: component,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="toolbar-item">
      {component.label}
    </div>
  );
};

export default Toolbar;
