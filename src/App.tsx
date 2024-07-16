import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import "./App.css";

// Define the structure of each component on the canvas
interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

const App: React.FC = () => {
  // State to manage components on the canvas
  const [components, setComponents] = useState<Component[]>([]);

  // State to toggle between preview mode and edit mode
  const [previewMode, setPreviewMode] = useState(false);

  // Function to add a new component to the canvas
  const addComponent = (component: { type: string; label: string }) => {
    // Generate a new component object with unique ID and default position
    const newComponent: Component = {
      id: components.length,
      type: component.type,
      left: 50,
      top: 50,
    };
    // Update the components state with the new component
    setComponents([...components, newComponent]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        {/* Toolbar component for adding new components */}
        <Toolbar addComponent={addComponent} />

        {/* Button to toggle between preview mode and edit mode */}
        <button
          className="toggle-button"
          onClick={() => setPreviewMode(!previewMode)}
        >
          {previewMode ? "Edit Mode" : "Preview Mode"}
        </button>

        {/* Canvas component to display and manipulate components */}
        <Canvas
          components={components}
          setComponents={setComponents}
          previewMode={previewMode}
        />
      </div>
    </DndProvider>
  );
};

export default App;
