import './App.css';
import Home from './components/Home';
import OneQuote from './components/OneQuote';
import NameAge from './components/NameAge';
import Activity from './components/Activity';
import MaleFemale from './components/MaleFemale';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}

        <Routes>
          {/* <div className="quotes__container"><OneQuote /></div> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/quote" element={<OneQuote/>}/>
          <Route path="/name-age" element={<NameAge/>}/>
          <Route path="/activity" element={<Activity/>}/>
          <Route path="/male-female" element={<MaleFemale/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
