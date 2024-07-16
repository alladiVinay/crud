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
}

const TextComponent: React.FC<TextComponentProps> = ({ component }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="text-component"
      style={{ position: "absolute", left: component.left, top: component.top }}
      onClick={onEditorClick}
    >
      <input
        type="text"
        value={editorState.getCurrentContent().getPlainText()}
        onChange={(e) =>
          setEditorState(
            EditorState.createWithContent(
              ContentState.createFromText(e.target.value)
            )
          )
        }
      />
    </div>
  );
};

export default TextComponent;
