import React from 'react'
import styled from 'styled-components'
import Inputs from '../Input/Inputs'

const ContainerMensagens = styled.div`
    width: 700px;
    height: 90vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    margin: 50px auto 0 auto;
    border: 1px solid #000;
`
const MensagensP = styled.p`
    display: block;
`

export class Mensagens extends React.Component{
    state = {
        mensagens: [],
        inputUsuario: '',
        inputMensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }

    enviarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.inputUsuario,
            mensagem: this.state.inputMensagem
        }

        const novaListaDeMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novaListaDeMensagens,
            inputMensagem: ''
        })
    }
    render(){

        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <MensagensP>{mensagem.usuario} - {mensagem.mensagem}</MensagensP>
            )
        })

        return(
            <ContainerMensagens>
                {listaDeMensagens}
                <Inputs 
                    inputUsuario={this.state.inputUsuario} 
                    onChangeUsuario={this.onChangeUsuario}
                    inputMensagem={this.state.inputMensagem}
                    onChangeMensagem={this.onChangeMensagem}
                    enviarMensagem={this.enviarMensagem} 
                />
            </ContainerMensagens>
        )
    }
}

export default Mensagens