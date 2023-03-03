import Navbar from "./components/navbar/Navbar";
import {MetubeProvider} from './context/MetubeContext';

function App() {
  return (
      <MetubeProvider>
        <Navbar/>
      </MetubeProvider>
  );
}

export default App;
