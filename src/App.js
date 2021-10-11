
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Allquestions from './pages/Allquestions/Allquestions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Question from './pages/Question/Question';

function App() {
  return (
    <Router>
     <Topbar/>
     <Switch>
      <Route path="/contest" exact component={Allquestions}/>
      <Route path="/contest/problem/:name/:code" exact component={Question}/>
     </Switch>
    </Router>
  );
}

export default App;
