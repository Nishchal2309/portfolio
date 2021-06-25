import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages'
import Projects from './pages/projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/projects" component={Projects} exact/>
      </Switch>
    </Router>
  );
}

export default App;
