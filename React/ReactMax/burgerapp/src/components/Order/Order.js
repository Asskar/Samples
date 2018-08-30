import React from 'react'

import Styles from './Order.css'

const Order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ingr => (
        <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #aaa',
                padding: '5px'
            }}
            key={ingr.name}
        >
            {ingr.name}: {ingr.amount}
        </span>
    ));

    return (
        <div className={Styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{(+props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;