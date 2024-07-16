import React, { useState } from "react";
import { EditorState, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./TextComponent.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface TextComponentProps {
  component: Component; // Props for the component data (id, type, position)
  previewMode: boolean; // Flag indicating if in preview mode
}

const TextComponent: React.FC<TextComponentProps> = ({
  component,
  previewMode,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // State for the editor content

  // Prevents event bubbling on editor click
  const onEditorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Handles input change in the text input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!previewMode) {
      // Only update editor state if not in preview mode
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(e.target.value) // Updates editor state with new content
        )
      );
    }
  };

  return (
    <div
      className="text-component"
      style={{ position: "absolute", left: component.left, top: component.top }} // Positions the component based on props
      onClick={onEditorClick} // Prevents click events from bubbling up
    >
      {previewMode ? ( // Renders different content based on preview mode flag
        <div>{editorState.getCurrentContent().getPlainText()}</div> // Displays plain text content in preview mode
      ) : (
        <input
          type="text"
          value={editorState.getCurrentContent().getPlainText()} // Binds input value to current editor content
          onChange={handleInputChange} // Handles input changes
        />
      )}
    </div>
  );
};

export default TextComponent;
