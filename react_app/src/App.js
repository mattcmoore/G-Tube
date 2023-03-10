import Navbar from "./components/navbar/Navbar";
import Secondary from "./components/Secondary/Secondary"
import {MetubeProvider} from './context/MetubeContext';
import Queue from "./components/QueueComp/Queue";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
      <MetubeProvider>
            <Queue />
        {/* <Navbar/>
        <Secondary /> */}
      </MetubeProvider>
  );
}

export default App;
