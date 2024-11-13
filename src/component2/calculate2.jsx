import React from 'react'
import { Component } from 'react'
import './calculate2.css'

class Calculate2 extends Component{ 
    constructor(){
        super()
        this.state = {
            num1: '',
            num2: '',
            operator:'',
            result:'',
        }
    }
    handleClickNumber=(event)=>{
        
        if(this.state.result!==''){
            if(!this.state.num1){
                this.setState({
                num1:this.state.result,
            })
            }
            this.setState({
                num2:this.state.num2+event.target.value
            })
        }else{
            if(this.state.operator===''){
                this.setState({
                    num1: this.state.num1+event.target.value
                });
            }else{
                this.setState({
                    num2: this.state.num2+event.target.value
                });
            }
        }
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
                result='0'
        }
        this.setState({
            result:result,
            num1:'',
            num2:'',
            operator:'',
        })

    }
    handleClear=()=>{
        this.setState({
            num1:'',
            num2:'',
            operator:'',
            result:'',
        })
    }
    afficheResult=()=>{
        
    }

    render(){
        let {num1, num2, operator, result} = this.state
        return (
            <div className='container'>
                <div className='results'>
                    <div className='result'>
                        <input className='input-result' value={num1&& num1 +operator+ num2}/>
                        <h4>{result}</h4>
                    </div>
                    
                    <div className='clear'>
                        <input type='button' onClick={this.handleClear} value='C'/>
                    </div>
                </div>
                
                <div className='items'>
                    <div className='right'>
                        <input type='button' value='1' onClick={this.handleClickNumber} />
                        <input type='button' value='2' onClick={this.handleClickNumber} />
                        <input type='button' value='3' onClick={this.handleClickNumber} />
                        <input type='button' value='4' onClick={this.handleClickNumber} />
                        <input type='button' value='5' onClick={this.handleClickNumber} />
                        <input type='button' value='6' onClick={this.handleClickNumber} />
                        <input type='button' value='7' onClick={this.handleClickNumber} />
                        <input type='button' value='8' onClick={this.handleClickNumber} />
                        <input type='button' value='9' onClick={this.handleClickNumber} />
                        <input type='button' value='.' onClick={this.handleClickNumber} />
                        <input type='button' value='0' onClick={this.handleClickNumber} />
                        <input type='button' onClick={this.handleOperator} value='+'/>
                    </div>
                    
                    <div className='left'>
                        <input type='button' onClick={this.handleOperator} value='-'/><br />
                        <input type='button' onClick={this.handleOperator} value='*'/><br />
                        <input type='button' onClick={this.handleOperator} value='/'/><br />
                        <input type='button' onClick={this.handleClick} value='='/><br />
                    </div>
                    
                </div>
                

            </div>
        )
    }

}

export default Calculate2
