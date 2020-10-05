// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    constructor(){
        super()
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

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })

    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })

    }
    render(){
        const resolution = this.state.settings.video.resolution
        const bitrate = this.state.settings.bitrate
        return(
            <div>
                <button onClick={this.updateBitrate}className="bitrate">{bitrate}</button>
                <button onClick={this.updateResolution} className="resolution">{resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
