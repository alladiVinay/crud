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
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ component }) => {
  const [text, setText] = useState("Button");

  return (
    <button
      className="button-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
      onClick={() => setText(prompt("Enter button text", text) || text)}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
