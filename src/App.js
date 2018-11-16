import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route} from "react-router-dom";
import Home from './views/Home';
import Search from './views/Search';
import NotFound from './views/Notfound';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/" component={Search} />
      <Route component={NotFound} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
