import React from "react";
import {Route, Switch, Link} from 'react-router-dom'
import PizzaForm from './PizzaForm.js'

const App = () => {
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
      </header>

      <Switch>



        <Route path="/pizza">
          <PizzaForm />
        </Route>


        <Route path="/">
          <Link to="/pizza"><button>Pizza?</button></Link>
        </Route>
      </Switch>


    </div>
  );
};
export default App;
