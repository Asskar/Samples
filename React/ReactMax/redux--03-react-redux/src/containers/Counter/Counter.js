import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import ActionTypes from '../../store/ActionTypes'

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: ActionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: ActionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: ActionTypes.ADD, payload: 5 }),
        onSubCounter: () => dispatch({ type: ActionTypes.SUB, payload: 5 })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);