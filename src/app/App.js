import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AccountsMain from './Components/accountsMainpg'
import ViewAcc from './Components/viewAcc'
import AddAcc from './Components/addAcc'
import '../bootstrap.min.css'


function App(){
  

  return(
    <div className="container">
      <Router>
      <Link className="h1-title" to="/">Retail Store</Link>
        <Switch>
          <Route path="/" exact component = {AccountsMain} ></Route>
          <Route path="/add-acc" exact component = {AddAcc}></Route>
          <Route path="/:id" component = {ViewAcc}></Route>
        </Switch>
      </Router>
    </div>
  )

}

export default App;