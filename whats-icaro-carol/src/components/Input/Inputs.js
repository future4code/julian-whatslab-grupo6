import React from 'react'
import styled from 'styled-components'

const DivInputs = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin-bottom: 5px;
    margin-right: 5%;
    margin-left: 5%;
`

const InputNomeUsuario = styled.input`
    width: 20%;
    margin-right: 5px;
    border-radius: 5px;
    padding: 12px 20px;
`

const InputMensagem = styled.input`
    width: 60%;
    margin-right: 5px;
    border-radius: 5px;
    padding: 12px 20px;
`

const Botao = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    cursor: pointer;
    width: 20%;
    border-radius: 5px;
`

export class Inputs extends React.Component {

    render(){
        return (
            <DivInputs>
                <InputNomeUsuario placeholder="Usuário" value={this.props.inputUsuario} onChange={this.props.onChangeUsuario}></InputNomeUsuario>
                <InputMensagem placeholder="Mensagem" value={this.props.inputMensagem} onKeyDown={this.props.apertaEnter} onChange={this.props.onChangeMensagem}></InputMensagem>
                <Botao onClick={this.props.enviarMensagem}>Enviar</Botao>
            </DivInputs> 
        )
    }
}

export default Inputs