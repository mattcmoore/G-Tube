import { useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MetubeContext from "./context/MetubeContext";
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

function App() {
  const {theme} = useContext(MetubeContext)

  useEffect(()=>{
    document.body.className = theme.apperance === 'Dark Theme' ? 'dark':'light'
  }, [theme])
  
  return (
    <div className={theme.apperance === 'Dark Theme' ? 'dark':'light'}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/videoPage' element={<VideoPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
