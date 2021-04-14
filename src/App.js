import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from '../src/components/common/MainPage';
import Login from '../src/components/common/Login';


function App() {

  return (

      <Router>
          
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </Router>

  );
}

export default App;
