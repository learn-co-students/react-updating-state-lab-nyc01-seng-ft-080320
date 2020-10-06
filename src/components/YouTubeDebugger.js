import React from 'react';

class YouTubeDebugger extends React.Component{
    
    constructor(){
        super();
        this.state={
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

    bitrateClick = () => {
        console.log('bitrate clicked');
        this.setState({settings:{...this.state.settings, bitrate:12}}) 
     };

    resolutionClick = () => {
        console.log('resolution clicked')
        this.setState({settings:{...this.state.settings, video:{resolution:'720p'}}})
    }


    

    render(){
        return (
            <div>
        <button className='bitrate' onClick ={this.bitrateClick}>{this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.resolutionClick}>{this.state.settings.video.resolution}</button>
        </div>
        )
    }

}

export default YouTubeDebugger;