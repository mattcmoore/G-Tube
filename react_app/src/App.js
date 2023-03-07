

import Comments from "./components/comments/Comments";

import Navbar from "./components/navbar/Navbar";
import Secondary from "./components/Secondary/Secondary"
import {MetubeProvider} from './context/MetubeContext';

function App() {
  return (
      <MetubeProvider>
        {/* <Navbar/> */}
        {/* <Secondary /> */}
        <Comments />
      </MetubeProvider>
  );
}


export default App;
