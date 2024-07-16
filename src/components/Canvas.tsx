import React from "react";
import { useDrop } from "react-dnd"; // Importing useDrop hook from react-dnd library
import TextComponent from "./TextComponent"; // Importing TextComponent
import ImageComponent from "./ImageComponent"; // Importing ImageComponent
import ButtonComponent from "./ButtonComponent"; // Importing ButtonComponent
import "./Canvas.css"; // Importing CSS file for Canvas component styling

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface CanvasProps {
  components: Component[]; // Array of components on the canvas
  setComponents: (components: Component[]) => void; // Function to update components state
  previewMode: boolean; // Flag indicating if preview mode is active
}

const Canvas: React.FC<CanvasProps> = ({
  components,
  setComponents,
  previewMode,
}) => {
  const [, drop] = useDrop({
    accept: "component", // Accepting only components of type "component" for drop
    drop: (item: any, monitor) => {
      if (!previewMode) {
        // Only allow dropping if not in preview mode
        const delta = monitor.getClientOffset(); // Getting client offset of drop
        const left = delta!.x; // Calculating left position based on drop
        const top = delta!.y; // Calculating top position based on drop
        addComponent(item.type, left, top); // Adding component to canvas at calculated position
      }
    },
    canDrop: () => !previewMode, // Disallow dropping if in preview mode
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Collecting whether a component is being dragged over the canvas
    }),
  });

  const addComponent = (type: string, left: number, top: number) => {
    const id = components.length + 1; // Generating unique id for the new component
    setComponents([...components, { id, type, left, top }]); // Adding new component to the components array
  };

  return (
    <div ref={drop} className={`canvas ${previewMode ? "preview-mode" : ""}`}>
      {/* Rendering each component on the canvas based on its type */}
      {components.map((component) => {
        switch (component.type) {
          case "text":
            return (
              <TextComponent
                key={component.id}
                component={component}
                previewMode={previewMode}
              />
            );
          case "image":
            return (
              <ImageComponent
                key={component.id}
                component={component}
                previewMode={previewMode}
              />
            );
          case "button":
            return (
              <ButtonComponent
                key={component.id}
                component={component}
                previewMode={previewMode}
              />
            );
          default:
            return null; // Handling any unknown component types
        }
      })}
    </div>
  );
};

export default Canvas;
