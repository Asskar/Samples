import React, { Component } from 'react'
import Axios from '../../../AxiosOrder';

import Order from '../../../components/Order/Order';
import withError from '../../../higherOrderComponents/withErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        Axios.get('orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({ id: key, ...response.data[key] })
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }

    render = () => {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />)}
            </div>
        );
    }
}

export default withError(Orders, Axios);