import React, { Component } from 'react';

class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }


    render() {
        return (
            <div>
                <p>counter : {this.state.count}</p>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

counter.propTypes = {

};

export default counter;