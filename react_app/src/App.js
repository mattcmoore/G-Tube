import Navbar from "./components/navbar/Navbar";
import Secondary from "./components/Secondary/Secondary"
import {MetubeProvider} from './context/MetubeContext';

function App() {
  return (
      <MetubeProvider>
        <Navbar/>
        <Secondary />
      </MetubeProvider>
  );
}

export default App;
