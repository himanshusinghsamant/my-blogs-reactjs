import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import News from './Segments/News';
import Jobs from './Segments/Jobs';
import UpComingUpdates from './Segments/UpComingUpdates';
import Home from './components/Home';
import Info from './All_Items/info';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/news' Component={News} />
          <Route path='/jobs' Component={Jobs} />
          <Route path='/upcomingupdates' Component={UpComingUpdates} />
          <Route path='/info' Component={Info} />
          <Route exact path='/' Component={Home} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
