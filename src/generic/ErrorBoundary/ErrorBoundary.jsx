import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            activo: false
        }

    }
    estaActivo = () => {
        return this.state.activo ? "Activo" : "No activo"
    }

    onClickHandler = () => {
        this.setState({ activo: true })
    }

    render() { 
        return (
        
        <div>
            <button onClick={this.onClickHandler}>
                Activar
            </button>
            <h1>
                ErrorBoundary{this.props.saludos}
                {
                    this.estaActivo()
                }
            </h1>
        </div>

        )
    }
}

export default ErrorBoundary