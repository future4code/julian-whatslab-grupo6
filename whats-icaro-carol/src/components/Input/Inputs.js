import React from 'react'
import styled from 'styled-components'

const DivInputs = styled.div`
    display: flex;
    padding: 5px;
    width: 100%;
`

const InputNomeUsuario = styled.input`
    margin-right: 5px;
    width: 30%;
`

const InputMensagem = styled.input`
    margin-right: 5px;
    width: 60%;
`

export class Inputs extends React.Component {

    render(){
        return (
            <DivInputs>
                <InputNomeUsuario placeholder="Usuário" value={this.props.inputUsuario} onChange={this.props.onChangeUsuario}></InputNomeUsuario>
                <InputMensagem placeholder="Mensagem" value={this.props.inputMensagem} onKeyDown={this.props.apertaEnter} onChange={this.props.onChangeMensagem}></InputMensagem>
                <button onClick={this.props.enviarMensagem}>Enviar</button>
            </DivInputs> 
        )
    }
}

export default Inputs