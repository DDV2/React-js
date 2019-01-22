import React, {Component} from "react"

class Numeros extends Component {
    ecuacion = event => {
        console.log("yay")
    }
    render() {
        return(
            <div>
                
                <div>
                    <button className = "numeros" value = "1" onClick={this.props.onclick}>1</button>
                    <button className = "numeros" value = "2" onClick={this.props.onclick}>2</button>
                    <button className = "numeros" value = "3" onClick={this.props.onclick}>3</button>
                    <button className = "operadores" value = "+" onClick={this.props.onclick}>+</button>
                    <button className= "reset" value = "reset" onClick={this.props.onclick}>C</button>
                </div>
                <div>
                    <button className = "numeros" value = "4" onClick={this.props.onclick}>4</button>
                    <button className = "numeros" value = "5" onClick={this.props.onclick}>5</button>
                    <button className = "numeros" value = "6" onClick={this.props.onclick}>6</button>
                    <button className = "operadores" value = "-" onClick={this.props.onclick}>-</button>
                </div>
                <div>
                    <button className = "numeros" value = "7" onClick={this.props.onclick}>7</button>
                    <button className = "numeros" value = "8" onClick={this.props.onclick}>8</button>
                    <button className = "numeros" value = "9" onClick={this.props.onclick}>9</button>
                    <button className = "operadores" value = "/" onClick={this.props.onclick}>/</button>
                </div>
                <div>
                    <button className = "numeros" value = "." onClick={this.props.onclick}>.</button>
                    <button className = "numeros" value = "0" onClick={this.props.onclick}>0</button>
                    <button className= "result" value = "resultado" onClick={this.props.onclick}>=</button>
                    <button className = "operadores" value = "*" onClick={this.props.onclick}>x</button>
                    
                </div>
            </div>

        )
    }
}

export default Numeros