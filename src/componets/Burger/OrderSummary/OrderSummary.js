import React, { Component } from 'react';
import Aux from '../../../hoc/Wrapper'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('OrderSummary Will Update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicios burger with :</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)} </p>
                <p>Continue to checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }


};

export default OrderSummary;