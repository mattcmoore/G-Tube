import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { MetubeProvider } from './context/MetubeContext';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';import Queue from "./components/Secondary/QueueComp/Queue";



function App() {
  return (
    <>
       <MetubeProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/videoPage' element={<VideoPage/>}/>
          </Routes>
        </Router>
        {/* <Queue/> */}
      </MetubeProvider>
    </>
  );
}

export default App;
