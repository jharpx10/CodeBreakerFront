import CodeBreakerView from './components/CodeBreakerView';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {





  return (
    <div className="App">
       <Router>
     
      <Switch>
      <Route path="/">
      <CodeBreakerView></CodeBreakerView>
      </Route>
      </Switch>
  
    </Router>
    </div>
  );
}

export default App;
