import logo from '../../logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch ,Route, Link } from 'react-router-dom';
import Menu from '../Menu/';
import CreateSurvey from '../CreateSurvey/';
import TakeSurvey from '../TakeSurvey/';

function App() {
  const [squestions, setSquestions] = useState([]);
  return (
   <>
     <div className="col-md-10 offset-md-1 col-12 text-center">
       <img className="col-md-6" alt='logo' src={logo}/>
       <Router>
         
         <Switch>
         <Route path="/createSurvey">
             <CreateSurvey squestions={squestions} setSquestions={setSquestions}/>
           </Route>
           <Route path="/takeSurvey">
             <TakeSurvey questions={squestions}/>
           </Route>
           <Route path="/">
             <Menu/>
           </Route>

         </Switch>
         </Router>

     </div>
   </>
  );
}

export default App;
