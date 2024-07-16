import React from "react";
import DraggableItem from "./DraggableItem"; // Importing DraggableItem component
import "./Toolbar.css"; // Importing CSS file for styling

// Array of components available in the toolbar, each with a type and label
const components = [
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "button", label: "Button" },
];

// Props interface defining the addComponent function
interface ToolbarProps {
  addComponent: (component: { type: string; label: string }) => void; // Callback function to add a component
}

// Functional component for the Toolbar
const Toolbar: React.FC<ToolbarProps> = ({ addComponent }) => {
  return (
    <div className="toolbar">
      {" "}
      {/* Container div for the toolbar */}
      {components.map(
        (
          component,
          index // Mapping over components array to render DraggableItem components
        ) => (
          <DraggableItem key={index} component={component} /> // Each DraggableItem represents a component in the toolbar
        )
      )}
    </div>
  );
};

export default Toolbar;
