import React from "react";
import { useDrag } from "react-dnd";

interface DraggableItemProps {
  component: { type: string; label: string }; // Props for the component type and label
}

const DraggableItem: React.FC<DraggableItemProps> = ({ component }) => {
  const [, drag] = useDrag({
    type: "component", // Defines the type of draggable item
    item: { type: component.type }, // Specifies the item being dragged
  });

  return (
    <div ref={drag} className="toolbar-item">
      {component.label} {/* Displays the label of the draggable item */}
    </div>
  );
};

export default DraggableItem;
