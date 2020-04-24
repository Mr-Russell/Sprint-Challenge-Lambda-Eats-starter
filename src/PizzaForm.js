import React from 'react';

function PizzaForm (props) {
    return(
        <form onSubmit={props.onSubmit}>
            <h2>Build Your Own Pizza</h2>

            <br />

            <div className='errors'>
                {props.errors.name.length > 0 ? (<p>{props.errors.name}</p>) : null}
            </div>

            <br />

            <label>Order Name:
                <input
                name='name'
                type='text'
                value={props.values.name}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />
            <br />

            <label>Pizza Size:
                <select
                name='size'
                >
                    <option value='10in'>10 inch</option>
                    <option value='12in'>12 inch</option>
                    <option value='15in'>15 inch</option>
                    <option value='18in'>18 inch</option>
                </select>
            </label>

            <br />

            <h4>Select Your Toppings</h4>
            <label><input
                name='pepperoni'
                type='checkbox'
                checked={props.values.toppings.pepperoni}
                onChange={props.checkboxChange}
            />Pepperoni</label>
            <br />
            <label><input
                name='sausage'
                type='checkbox'
                checked={props.values.toppings.sausage}
                onChange={props.checkboxChange}
            />Sausage</label>
            <br />
            <label><input
                name='bacon'
                type='checkbox'
                checked={props.values.toppings.bacon}
                onChange={props.checkboxChange}
            />Bacon</label>
            <br />
            <label><input
                name='mushrooms'
                type='checkbox'
                checked={props.values.toppings.mushrooms}
                onChange={props.checkboxChange}
            />Mushrooms</label>
            <br />
            <label><input
                name='pineapple'
                type='checkbox'
                checked={props.values.toppings.pineapple}
                onChange={props.checkboxChange}
            />Pineapple</label>
            <br />
            <label><input
                name='exCheese'
                type='checkbox'
                checked={props.values.toppings.exCheese}
                onChange={props.checkboxChange}
            />Extra Cheese</label>

            <br />
            <br />

            <label>Special Instructions:
                <input
                name='instructions'
                type='text'
                value={props.values.instructions}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />
            <br />

            <button>Submit Your Order!</button>
        </form>
        
    )
}

export default PizzaForm;