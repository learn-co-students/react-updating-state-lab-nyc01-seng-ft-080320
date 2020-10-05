// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }    
    }

    // clickHandler = (event) => {
    //     // console.log(event.target)
    //     if(event.target.matches('.bitrate')) {
    //         this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 bitrate: 12
    //             }
    //         })
    //     } else {
    //         this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 video: {
    //                     ...this.state.video,
    //                     resolution: '720p'
    //                 }
    //             }
    //         })
    //     }
        
    // }

    birateClickHandler = e => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionClickHandler = e => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <React.Fragment>
            <button onClick={this.birateClickHandler} className="bitrate">Birate</button>
            <button onClick={this.resolutionClickHandler} className="resolution">Resolution</button>
            </React.Fragment>
        )
    }
}

export default YouTubeDebugger