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
  component: Component;
  previewMode: boolean;
}

const TextComponent: React.FC<TextComponentProps> = ({
  component,
  previewMode,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!previewMode) {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(e.target.value)
        )
      );
    }
  };

  return (
    <div
      className="text-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
      onClick={onEditorClick}
    >
      {previewMode ? (
        <div>{editorState.getCurrentContent().getPlainText()}</div>
      ) : (
        <input
          type="text"
          value={editorState.getCurrentContent().getPlainText()}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default TextComponent;
