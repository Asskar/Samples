import React, { Component } from 'react'
import Axios from '../../../AxiosOrder';

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import Styles from './ContactData.css'

class ContactData extends Component {
    state = {
        orderForm: {
            name: this.createInputConfig('input', 'text', 'Your Name', { required: true }),
            street: this.createInputConfig('input', 'text', 'Your Street', { required: true }),
            zipCode: this.createInputConfig('input', 'text', 'Your Zip-Cde', { required: true, minLength: 3, maxLength: 5 }),
            country: this.createInputConfig('input', 'text', 'Your Country', { required: true }),
            email: this.createInputConfig('input', 'email', 'Your Email', { required: true }),
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                formIsValid: false,
                value: 'fastest',
                valid: true
            }
        },

        loading: false
    }

    createInputConfig(elementType, type, placeholder, validationOptions) {
        return {
            elementtype: elementType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: '',
            validation: validationOptions,
            valid: false,
            validationMessage: '',
            touched: false
        }
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const formData = {}
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] =
                this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        Axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(
                _ => {
                    this.setState({ loading: false });
                });
    }

    checkValidity(value, rules) {
        let isValid = true;
        let validationMessage = '';

        if (!rules) {
            return { isValid, validationMessage }
        }

        if (rules.required) {
            isValid = value.trim() !== '';
            if (!isValid) {
                validationMessage = 'Pole jest wymagnae!'
                return { isValid, validationMessage }
            }
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength;
            if (!isValid) {
                validationMessage = `Pole powinno mieć conajmniej ${rules.minLength}!`
                return { isValid, validationMessage }
            }
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength;
            if (!isValid) {
                validationMessage = `Pole nie powinno mieć nie więcej niż ${rules.maxLength}!`
                return { isValid, validationMessage }
            }
        }

        return { isValid, validationMessage };
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm }
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
        updatedFormElement.value = event.target.value;
        const { isValid, validationMessage } = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.valid = isValid;
        updatedFormElement.validationMessage = validationMessage;
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
    }

    render = () => {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        invalid={!formElement.config.valid}
                        validationMessage={formElement.config.validationMessage}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button
                    btnType="Success"
                    disabled={!this.state.formIsValid}
                >
                    ORDER
                </Button>
            </form>);

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={Styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;