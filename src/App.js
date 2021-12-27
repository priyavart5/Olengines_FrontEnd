import React, { Component } from 'react';
import './App.css';
import Signin from './components/Signin-up/Signin';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import First_Screen from './components/First_Screen/First_Screen';
import Latestcars from './components/Latestcars/Latestcars';
import Home from './components/Home/Home';
import Trendingcars from './components/Trendingcars/Trendingcars';
import Signup from './components/Signin-up/Signup';
import Upcomingcars from './components/Upcomingcars/Upcomingcars';
import Sedancars from './components/Cartype/Sedancars';
import Hatchback from './components/Cartype/Hatchbackcars';
import SUVs from './components/Cartype/SUVscars';
import Compare from './components/Compare/Compare';
import Searchpage from './components/Searchpage/Searchpage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }





  render(){
  return (
    <BrowserRouter>
    <div>
    <Switch>
      <Route exact={true} path="/" component={First_Screen} />
      <Route exact={true} path='/home' component={Home} />
      <Route exact={true} path="/signin"  component={Signin} />
      <Route exact={true} path='/signup' component={Signup} />
      <Route exact={true} path='/latestcars' component={Latestcars} />
      <Route exact={true} path='/upcomingcars' component={Upcomingcars} />
      <Route exact={true} path='/trendingcars' component={Trendingcars} />
      <Route exact={true} path='/sedan-cars' component={Sedancars} />
      <Route exact={true} path='/hacthback-cars' component={Hatchback} />
      <Route exact={true} path='/SUVs-cars' component={SUVs} />
      <Route exact={true} path='/compare-cars' component={Compare} />
      <Route exact={true} path='/search' component={Searchpage} />
    </Switch>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
