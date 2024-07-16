import React from "react";
import { useDrop } from "react-dnd";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";
import "./Canvas.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface CanvasProps {
  components: Component[];
  setComponents: (components: Component[]) => void;
  previewMode: boolean;
}

const Canvas: React.FC<CanvasProps> = ({
  components,
  setComponents,
  previewMode,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: "component",
    drop: (item: any, monitor) => {
      if (!previewMode) {
        const delta = monitor.getClientOffset();
        const left = delta!.x;
        const top = delta!.y;
        addComponent(item.type, left, top);
      }
    },
    canDrop: () => !previewMode,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addComponent = (type: string, left: number, top: number) => {
    const id = components.length + 1;
    setComponents([...components, { id, type, left, top }]);
  };

  return (
    <div ref={drop} className={`canvas ${previewMode ? "preview-mode" : ""}`}>
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
            return null;
        }
      })}
    </div>
  );
};

export default Canvas;
