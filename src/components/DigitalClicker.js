import React, { Component } from 'react'

class DigitalClicker extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            timesClicked: 0
        }
    }
    
    inkzMcgee = () => {
        this.setState(ps => { return {timesClicked: ps.timesClicked += 1 }})
    }

    render() {
        return (
            <button
                onClick = {this.inkzMcgee}
            >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker