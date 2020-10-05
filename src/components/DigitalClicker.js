// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(previousState => {
            return{
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    render(){
        let timesClicked = this.state.timesClicked
        console.log(timesClicked)
        return(
            <div>
                <button onClick={this.clickHandler}>{timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
