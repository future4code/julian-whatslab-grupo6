import React from 'react'
import styled from 'styled-components'

const DivInputs = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputNomeUsuario = styled.input`
    margin-right: 5px;
    width: 30%;
`

const InputMensagem = styled.input`
    margin-right: 5px;
    width: 100%;
`

export class Inputs extends React.Component {
    state = {
        valorUsuario: '',
        valorMensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({valorUsuario: event.target.value})
        console.log(this.state.valorUsuario)
    }

    onChangeMensagem = (event) => {
        this.setState({valorMensagem: event.target.value})
    }

    render(){
        return (
            <DivInputs>
                <InputNomeUsuario placeholder="Usuário" value={this.state.valorUsuario} onChange={this.onChangeUsuario}></InputNomeUsuario>
                <InputMensagem placeholder="Mensagem" value={this.state.valorMensagem} onChange={this.onChangeMensagem}></InputMensagem>
                <button>Enviar</button>
            </DivInputs> 
        )
    }
}

export default Inputs