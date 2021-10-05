import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Detail from "./components/Detail";
import List from "./components/List";
import Search from "./components/Search";
import Update from "./components/Update";
import Menu from "./components/Menu";
function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/search" component={Search} />
          <Route path="/update" component={Update} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
