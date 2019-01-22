import React, {Component} from "react"
import Numeros from "./Numeros"
import Pantalla from "./Pantalla"

class App extends Component {
    state = {
        cuenta: ""
    }
    introducirNumero = event => {
        if(event.target.value === "reset"){
            this.setState({
                cuenta: ""
            })
        }else if(event.target.value === "resultado"){
            const resultado = eval(this.state.cuenta)
            this.setState({
                cuenta: resultado
            })
        } else {
            const num = event.target.value
            this.setState(prevState => {
                return {
                    cuenta : prevState.cuenta + num 
                }
            })
        }
    }

    render() {
        return(
            <div>
                <div>
                    <Pantalla text={this.state.cuenta}/>
                </div>
                <div>
                    <Numeros onclick={this.introducirNumero}/>
                </div>
            </div>
            )
    }
}

export default App 
