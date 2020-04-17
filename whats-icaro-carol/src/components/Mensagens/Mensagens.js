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
const DivMensagens = styled.div`
    display: block;
`

const MensagensP = styled.p`
`
const MensagensEu = styled.p`
    margin: 70px;
`

export class Mensagens extends React.Component{
    state = {
        mensagens: [],
        inputUsuario: '',
        inputMensagem: '',
        verificaEu: false
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

        if (this.state.inputUsuario === "eu"){
            this.setState({
                verificaEu: true
            })
        }else{
            this.setState({
                verificaEu: false
            })
        }

        const novaListaDeMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novaListaDeMensagens,
            inputMensagem: ''
        })
    }

    removeMensagem = (mensagemIndex) => {
        if (window.confirm("Tem certeza que deseja remover?")){
            const mensagemRemovida = this.state.mensagens

            mensagemRemovida.splice(mensagemIndex, 1)

            this.setState({
                mensagens: mensagemRemovida
            })
        }
    }

    apertaEnter = (event) => {
        if (event.key === "Enter"){
            const novaMensagem = {
                usuario: this.state.inputUsuario,
                mensagem: this.state.inputMensagem
            }

        if (this.state.inputUsuario === "eu"){
            this.setState({
                verificaEu: true
            })
        }else{
            this.setState({
                verificaEu: false
            })
        }
            const novaListaDeMensagens = [...this.state.mensagens, novaMensagem]
    
            this.setState({
                mensagens: novaListaDeMensagens,
                inputMensagem: ''
            })
        }
    }

    render(){

        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return <MensagensEu onDoubleClick={this.removeMensagem}>{mensagem.mensagem}</MensagensEu>
        })

        return(
            <ContainerMensagens>
                <DivMensagens>{listaDeMensagens}</DivMensagens>
                <Inputs 
                    inputUsuario={this.state.inputUsuario} 
                    onChangeUsuario={this.onChangeUsuario}
                    inputMensagem={this.state.inputMensagem}
                    onChangeMensagem={this.onChangeMensagem}
                    enviarMensagem={this.enviarMensagem}
                    apertaEnter={this.apertaEnter} 
                />
            </ContainerMensagens>
        )
    }
}

export default Mensagens