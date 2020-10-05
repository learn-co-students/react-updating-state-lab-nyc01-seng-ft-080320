// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    constructor() {
        super();
     
        // Define the initial state:
        this.state = {
            timesClicked: 0
        };
      }
    clickedAgain = () => {
        let newCount = this.state.timesClicked + 1;
        this.setState({
        timesClicked: newCount
        })
    }
    render(){
        return <button onClick={this.clickedAgain}>{this.state.timesClicked}</button>
    }
}
export default DigitalClicker