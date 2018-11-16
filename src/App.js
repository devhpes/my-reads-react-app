import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route} from "react-router-dom";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/" component={Search} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
