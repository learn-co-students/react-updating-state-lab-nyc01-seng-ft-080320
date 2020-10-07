// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        this.setState(currentState => {
            return { timesClicked: currentState.timesClicked + 1}
        })
    }
    render() {
    
        return <button onClick={this.clickHandler}>{this.state.timesClicked}</button>

    }


}