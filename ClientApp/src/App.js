import React, { Component } from 'react';
import { Objave } from './components/Objave';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { DodajObjavo } from './components/DodajObjavo';
import { UrediObjavo } from './components/UrediObjavo';
import { Switch, Route } from 'react-router-dom';


export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Objave} />
                <Route path='/objave' component={Objave} />
                <Route path='/dodajobjavo' component={DodajObjavo} />
                <Route path='/urediobjavo/:id' component={UrediObjavo} />
              </Switch>
          </div>
    );
  }
}
