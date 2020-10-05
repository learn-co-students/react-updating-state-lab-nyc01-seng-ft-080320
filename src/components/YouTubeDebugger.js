// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
    constructor(){
        super();

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

    bitrate = () => {
        let newState = this.state;
        newState.settings.bitrate=12;
        this.setState(newState);
    }

    resolution = () => {
        let newState = this.state;
        newState.settings.video.resolution='720p'
        this.setState(newState);
    }
    render(){
        return(
            <React.Fragment>
                <button className="bitrate" onClick={this.bitrate}>Bitrate</button>
                <button className="resolution" onClick={this.resolution}>Resolution</button>
            </React.Fragment>
        )
    }

}

export default YouTubeDebugger