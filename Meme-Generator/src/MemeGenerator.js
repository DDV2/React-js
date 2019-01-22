import React, {Component} from "react";

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const meme = response.data.memes
                this.setState({ allMemeImgs: meme})
                console.log(this.state.allMemeImgs)
            })
    }
    
    handleChange = event=> {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    }
    chooseMeme = (event)=> {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randomMemeImg = this.state.allMemeImgs[randomNum].url;
        this.setState({
            randomImg: randomMemeImg
        });
    }
    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.chooseMeme}>
                    <label>
                    <input 
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.handleChange} 
                        placeholder="Top Text" />
                    <input 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.handleChange} 
                        placeholder="Bottom Text" />

                    </label>

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className= "top">{this.state.topText}</h2>
                    <h2 className= "bottom">{this.state.bottomText}</h2>
                </div>
            </div>

            );
    }
}

export default MemeGenerator;