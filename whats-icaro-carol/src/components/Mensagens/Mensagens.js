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
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 10%;
    margin-bottom: 10px;
`

const DivMensagensEu = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 10px;
`

const MensagensP = styled.p`
    display: flex;
    text-align: left;
    
`
const MensagensEu = styled.p`
    display: flex;
    justify-content: flex-end;
    margin-left: 5%;
`

export class Mensagens extends React.Component{
    state = {
        mensagens: [],
        inputUsuario: '',
        inputMensagem: '',
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
            mensagem: this.state.inputMensagem,
        }
        
        const novaListaDeMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novaListaDeMensagens,
            inputMensagem: ''
        })
    }

    apertaEnter = (event) => {
        
        if (event.key === "Enter"){
            const novaMensagem = {
                usuario: this.state.inputUsuario,
                mensagem: this.state.inputMensagem,
            }
            const novaListaDeMensagens = [...this.state.mensagens, novaMensagem]
    
            this.setState({
                mensagens: novaListaDeMensagens,
                inputMensagem: ''
            })
        }
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

    render(){

        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            if(mensagem.usuario.toUpperCase() === "EU"){
                return <DivMensagensEu><MensagensEu onDoubleClick={this.removeMensagem}>{mensagem.mensagem}</MensagensEu></DivMensagensEu>
            }
            return <DivMensagens><MensagensP onDoubleClick={this.removeMensagem}><strong>{mensagem.usuario}</strong>{": "}{mensagem.mensagem}</MensagensP></DivMensagens>
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
                    apertaEnter={this.apertaEnter} 
                />
            </ContainerMensagens>
        )
    }
}

export default Mensagens