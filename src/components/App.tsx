import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact={true} component={StreamList} />
          <Route
            path="/streams/new"
            exact={true}
            // tslint:disable-next-line:jsx-no-lambda
            render={() => <StreamCreate />}
          />
          <Route path="/streams/edit" exact={true} component={StreamEdit} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
