import React from "react";
import { useDrag } from "react-dnd";

interface DraggableItemProps {
  component: { type: string; label: string };
}

const DraggableItem: React.FC<DraggableItemProps> = ({ component }) => {
  const [, drag] = useDrag({
    type: "component",
    item: { type: component.type },
  });

  return (
    <div ref={drag} className="toolbar-item">
      {component.label}
    </div>
  );
};

export default DraggableItem;
