import React, { useState } from "react";
import "./ButtonComponent.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface ButtonComponentProps {
  component: Component; // Props for the component data (id, type, position)
  previewMode: boolean; // Flag indicating if in preview mode
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  component,
  previewMode,
}) => {
  const [text, setText] = useState("Button"); // State to hold the button text

  // Handles click event for the button
  const handleClick = () => {
    if (!previewMode) {
      // Checks if not in preview mode
      setText(prompt("Enter button text", text) || text); // Prompts user to enter button text
    }
  };

  return (
    <button
      className="button-component"
      style={{ position: "absolute", left: component.left, top: component.top }} // Positions the button based on props
      onClick={handleClick} // Handles click event with handleClick function
    >
      {text} {/* Displays the current button text */}
    </button>
  );
};

export default ButtonComponent;
