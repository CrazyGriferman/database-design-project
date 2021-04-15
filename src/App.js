import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from '../src/components/common/MainPage';
import Login from '../src/components/common/Login';
import Register from '../src/components/common/Register';


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
          <Route path="/register">
            <Register />
          </Route>
        </Switch>

      </Router>

  );
}

export default App;
