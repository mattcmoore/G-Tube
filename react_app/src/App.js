import Navbar from "./components/navbar/Navbar";
import Secondary from "./components/Secondary/Secondary"
import {MetubeProvider} from './context/MetubeContext';
import Video  from "./components/video_component/Video";
function App() {
  return (
      <MetubeProvider>
        <Navbar/>
        <Secondary />
        <Video />
      </MetubeProvider>
  );
}

export default App;
