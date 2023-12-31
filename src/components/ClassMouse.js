import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }
    logMousePosition=e=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        //eventlistner is setup only once that too in componentDidMount()
        window.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount(){
        //event Listener is setup o
    }
    render() {
        return (
            <div>
                X - {this.state.x}  Y - {this.state.y} 
            </div>
        )
    }
}

export default ClassMouse
