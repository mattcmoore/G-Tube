import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { MetubeProvider } from "./context/MetubeContext";
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
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
      </MetubeProvider>
    </>
  );
}

export default App;
