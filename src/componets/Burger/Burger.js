import React from 'react'
import classes from './burger.module.css'
import BurgerIn from './BurgerIn/BurgerIn'

const burger = (props) => {
    if (!props || !props.ingredients) {
        return null;
    }
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // 0, props.ingredients[igKey] // 2


            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIn key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIn type="bread-top" />
            {transformedIngredients}
            <BurgerIn type="bread-bottom" />
        </div>
    )
}

export default burger;