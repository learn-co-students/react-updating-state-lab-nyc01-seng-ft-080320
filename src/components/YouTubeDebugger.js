// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    clickHandler = (event) => {
        // console.log(event.target.className)

        switch (event.target.className) {
            case 'bitrate':
                this.setState({ settings: {...this.state.settings, bitrate: 12} })        
                break;
            case 'resolution':
                console.log(this.state.settings.video.resolution)
                this.setState({settings: {...this.state.settings, video:{...this.state.settings.video, resolution: '720p'}}})
                break;      
        }
        
    }
    
    

    render() {
        return (
            <div>
                <button className = "bitrate" onClick={this.clickHandler}> Bitrate</button> <br></br>
                <button className = "resolution" onClick={this.clickHandler}> Resolution</button>
            </div>
        )
    }
}
