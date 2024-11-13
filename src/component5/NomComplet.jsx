import React, { Component } from 'react';

class NomComplet extends Component {
    state={
        nom:'',
        prenom:'',
        NomComplet:'',
    }
    handleWrite=(event)=>{
        if(event.target.id==='nom'){
            this.setState({ nom:event.target.value});
        }else{
            this.setState({ prenom:event.target.value});
        }
    }
    handleClick=()=>{
        this.setState({NomComplet:this.state.nom+' '+this.state.prenom})
    }
    render() {
        return (
            <div>
                Nom : <input type="text" id='nom' placeholder='enter nom' onChange={this.handleWrite} /><br />
                Prenom : <input type="text" id='prenom' placeholder='enter prenom' onChange={this.handleWrite}/><br />
                <button onClick={this.handleClick}>submit</button><br />
                Nom Complet : {this.state.NomComplet}
            </div>
        );
    }
}

export default NomComplet;
