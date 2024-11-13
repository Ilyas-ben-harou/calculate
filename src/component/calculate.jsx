import React from 'react'
import { Component } from 'react'

class calculate extends Component{ 
    constructor(){
        super()
        this.state = {
            num1: '',
            num2: '',
            operator:'',
            result:'',
        }
    }
    handleWrite=(event)=>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleOperator=(event)=>{
        this.setState({
            operator: event.target.value
        })
    }
    handleClick=()=>{
        let num1 = parseFloat(this.state.num1);
        let num2 = parseFloat(this.state.num2);
        let operator = this.state.operator
        let result = 0
        switch(operator){
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '*':
                result = num1 * num2
                break;
            case '/':
                result = num1 / num2
                break;
            default:
                result=Number(num1-num2)
        }
        this.setState({
            result:result
        })
    }

render=()=>{
    let {num1,num2,operator,result}= this.state
    return (
        <div>
            <p>{num1&&num1} {operator&&operator} {num2&&num2}</p>
            <h1>{result}</h1>
            <input 
                type="number" 
                id='num1' 
                onChange={this.handleWrite}
                value={num1}
                placeholder='enter a' 
            />
            <input 
                type="number" 
                id='num2'
                onChange={this.handleWrite}
                value={num2}
                placeholder='enter b' 
            />
            <select name="" id="" onChange={this.handleOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            {/* <input type='button' onClick={this.handleOperator} value='+'/>
            <input type='button' onClick={this.handleOperator} value='-'/>
            <input type='button' onClick={this.handleOperator} value='*'/>
            <input type='button' onClick={this.handleOperator} value='/'/> */}
            <input type='button' onClick={this.handleClick} value='calculate'/>
        </div>
    )
}
}

export default calculate
