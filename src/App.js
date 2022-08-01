
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Allquestions from './pages/Allquestions/Allquestions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Question from './pages/Question/Question';
import Submit from './pages/Submit/Submit';
// import Demo from './pages/Demo';
import Home from './pages/Home/Home';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
     <Topbar/>
     <Switch>
     <Route path="/" exact component={Home}/>
      <Route path="/:categoryName" exact component={Allquestions}/>
      <Route path="/contest/problem/:name/:code" exact component={Question}/>
      <Route path="/contest/submit/:name/:code" exact component={Submit}/>
     </Switch>
    </Router>
  );
}

export default App;
