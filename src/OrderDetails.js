import React from 'react'

function OrderDetails(props) {
  
  return (
    <div>
      <h2>Your Order:</h2>
      <p>Order Name: {props.details.name}</p>
      <p>Pizza Size: {props.details.size}</p>
      {
        !!props.details.toppings && !!props.details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {
              props.details.toppings.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
      <p>Special Instructions: "{props.details.instructions}"</p>
    </div>
  )
}

export default OrderDetails