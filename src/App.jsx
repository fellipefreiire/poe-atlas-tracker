import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Atlas from "./components/Atlas/Atlas";

function App() {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Atlas />
			</DndProvider>
		</div>
	);
}

export default App;
