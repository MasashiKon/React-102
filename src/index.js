import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{

    state = { }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState(() =>({anything: e.target.value}))
    }

    render(){
        return(
            <>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.anything}</p>
            </>
        )
    }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
