import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import "./App.css";

interface Component {
  id: number;
  type: string;
  left: number;
  top: number;
}

const App: React.FC = () => {
  const [components, setComponents] = useState<Component[]>([]);

  const addComponent = (component: { type: string; label: string }) => {
    const newComponent: Component = {
      id: components.length,
      type: component.type,
      left: 50,
      top: 50,
    };
    setComponents([...components, newComponent]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Toolbar addComponent={addComponent} />
        <Canvas components={components} setComponents={setComponents} />
      </div>
    </DndProvider>
  );
};

export default App;
