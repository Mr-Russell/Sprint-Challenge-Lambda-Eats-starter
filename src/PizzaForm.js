import React from 'react';

function PizzaForm (props) {
    return(
        <form>
            <h2>Build Your Own Pizza</h2>

            <label>Your Name:
                <input
                name='name'
                type='text'
                ></input>
            </label>

            <br />

            <label>Pizza Size:
                <select
                name='size'
                >
                    <option value='10'>10 inch</option>
                    <option value='12'>12 inch</option>
                    <option value='15'>15 inch</option>
                    <option value='18'>18 inch</option>
                </select>
            </label>

        </form>
        
    )
}

export default PizzaForm;