import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Form from "./components/Form";
import AllNotes from "./components/AllNotes";
import Note from "./components/Note";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Form />
            <AllNotes />
          </Route>
          <Route path="/note/:id" component={Note} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
