import './App.css';
import Menu from './Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form'
import AllNotes from './AllNotes'
import Note from './Note'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
    <div className="App">
    <Menu />
    <Switch>
      <Route exact path="/">
        <Form/>
        <AllNotes/>
      </Route>
      <Route path="/note/:id">
        <Note/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
