import React, { useState } from "react";
import "./ButtonComponent.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface ButtonComponentProps {
  component: Component;
  previewMode: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  component,
  previewMode,
}) => {
  const [text, setText] = useState("Button");

  const handleClick = () => {
    if (!previewMode) {
      setText(prompt("Enter button text", text) || text);
    }
  };

  return (
    <button
      className="button-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
