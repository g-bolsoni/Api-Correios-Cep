import React from 'react'
import { Component } from 'react';
import apiCorreios from './service/connection'

export default class Cep extends Component{

    constructor(props){
        super(props);
        this.state={
            cep: "",
            logradouro: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: "",
            ddd: ""
        }
    }
    
  
    
    render(){
     return(
         <div className="container">
            <h2>Exemplo de Consulta de CEP</h2>
            <form action="submit">
                <div className="form-group">
                    <input type="number" 
                        className="form-control" 
                        onChange={(e)=>this.setState(e)}
                        placeholder="digite o CEP"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Consulta</button>
                </div>
            </form>
            <div className="form-group">
                <ul>
                    <li>Rua: {this.state.logradouro}</li>
                    <li>Bairro: {this.state.bairro}</li>
                    <li>Cidade: {this.state.localidade}</li>
                    <li>UF: {this.state.uf}</li>
                    <li>DDD: {this.state.ddd}</li>
                </ul>
            </div>
            
         </div>
     )   
    }

}