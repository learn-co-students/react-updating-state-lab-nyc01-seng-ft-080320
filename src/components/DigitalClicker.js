// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    state = {timesClicked: 0}

    // buttonHandler = (event) => {
    //     let newCount = this.state.timeClicked + 1
    //     this.setState({timeClicked: newCount})
    // }

    // constructor() {
    //     super();
    //     this.state = {
    //         timeClicked: 0
    //     }
    // }

    buttonHandler = (event) => {
        this.setState(previousState => {
            return {timesClicked: previousState.timesClicked + 1}
        })
    }

    render() {
        return (
            <button onClick={this.buttonHandler}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker