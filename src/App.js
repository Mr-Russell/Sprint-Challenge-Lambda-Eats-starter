import React, {useState} from "react";
import {Route, Switch, Link} from 'react-router-dom'
import PizzaForm from './PizzaForm.js'
import * as yup from 'yup';
import axios from 'axios'
import OrderDetails from "./OrderDetails.js";

const blankForm = {
  name: '',
  size: '10in',
  toppings:{
    pepperoni: false,
    sausage: false,
    bacon: false,
    mushrooms: false,
    pineapple: false,
    exCheese: false,
  },
  instructions: '',
};

const inputErrors ={
  name: '',
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Order Name Must Have At Least 2 Characters!')
    .required('Order Name is REQUIRED!'),

  size: yup
    .string(),
    
  instructions: yup
    .string()
})



const App = () => {

  const [formValues, setFormValues] = useState(blankForm)
  const [pizzaOrder, setPizzaOrder] = useState([])
  const [formErrors, setFormErrors] = useState(inputErrors)

  const postOrder = order =>{
    axios.post('https://reqres.in/api/unknown', order)
    .then(res =>{
      console.log(res)
      setPizzaOrder([...pizzaOrder, res.data])
    })
    .catch(err =>{
      console.log(err)
    })
  }
 //postOrder()
  console.log(pizzaOrder)


 const onSubmit = evt =>{
   evt.preventDefault()

   const newOrder = {
     name: formValues.name,
     size: formValues.size,
     toppings: Object.keys(formValues.toppings)
     .filter(topping => formValues.toppings[topping] === true),
     instructions: formValues.instructions,
   }

   postOrder(newOrder)
   setFormValues(blankForm)
 }


 const inputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
      setFormErrors(
        {...formErrors,
        [name]:''})
    })
    .catch(err =>{
      setFormErrors(
        {...formErrors, 
        [name]: err.errors[0]})
    })

  setFormValues({
    ...formValues,
    [name]: value
  })
}


const checkboxChange = evt => {
  const { name } = evt.target
  const isChecked = evt.target.checked

  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: isChecked,
    }
  })
}



  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Route path='/pizza'>
          <Link to='/'><button>Back to Home Page</button></Link>
        </Route>
      </header>

      <Switch>

        <Route path="/pizza">
          <PizzaForm 
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            onSubmit={onSubmit}
            errors={formErrors} />

          <br />

          {
            pizzaOrder.map(order =>{
              return(
                <OrderDetails details={order} />
              )
            })
          }

          {/* {
            pizzaOrder && <OrderDetails details={pizzaOrder} />
          } */}
        </Route>


        <Route path="/">
          <Link to="/pizza"><button>Pizza?</button></Link>
          <br /><br />
          <button>Burgers?</button>
          <br /><br />
          <button>Sandwiches?</button>
          <br /><br />
          <button>Pancakes?</button>
          <br /><br />
          <button>Tacos?</button>
          <br /><br />
          <button>Burritos?</button>
        </Route>

      </Switch>


    </div>
  );
};
export default App;
