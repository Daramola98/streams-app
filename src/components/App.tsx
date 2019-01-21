import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={StreamList} />
            <Route path="/streams/new" exact={true} component={StreamCreate} />
            <Route
              path="/streams/edit/:id"
              exact={true}
              component={StreamEdit}
            />
            <Route path="/streams/:id" exact={true} component={StreamShow} />
            <Route
              path="/streams/delete/:id"
              exact={true}
              component={StreamDelete}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
