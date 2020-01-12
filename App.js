import React, { Component, Fragment } from 'react';
import './App.css';
import PersistentDrawerRight from './Layout/Drawer/Drawer';


class App extends Component {


  state = {
    title: "FXDS - FoRex Data Service",
    env: "DEV"
  }

  render () {

    
    return (
      <Fragment>
        <PersistentDrawerRight title={this.state.title} env={this.state.env}/>
        

        
      </Fragment>
    );
  }
}
export default App;
