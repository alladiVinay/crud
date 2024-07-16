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
  setComponents: React.Dispatch<React.SetStateAction<Component[]>>;
}

const Canvas: React.FC<CanvasProps> = ({ components, setComponents }) => {
  const [, drop] = useDrop({
    accept: "component",
    drop: (item: Component, monitor) => {
      const offset = monitor.getClientOffset();
      const newComponent = {
        id: components.length,
        type: item.type,
        left: offset!.x,
        top: offset!.y,
      };
      setComponents([...components, newComponent]);
    },
  });

  return (
    <div ref={drop} className="canvas">
      {/* <div
      ref={drop}
      style={{
        padding: "80px",
        border: "1px solid #ddd ",
        marginTop: "50px",
        flex: 1,
        position: "relative",
        marginLeft: "20px",
        height: "100%",
        marginRight: "20px",
      }}
    > */}
      {components.map((component) => {
        switch (component.type) {
          case "text":
            return <TextComponent key={component.id} component={component} />;
          case "image":
            return <ImageComponent key={component.id} component={component} />;
          case "button":
            return <ButtonComponent key={component.id} component={component} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Canvas;
