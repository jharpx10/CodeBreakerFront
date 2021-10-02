import CodeBreakerView from './components/CodeBreakerView';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './components/Index';
function App() {





  return (
    <div className="App">
       <Router>
     
      <Switch>
      <Route path="/game">
      <CodeBreakerView></CodeBreakerView>
      </Route>
      <Route path="/">
        <Index></Index>
      </Route>
      </Switch>
  
    </Router>
    </div>
  );
}

export default App;
