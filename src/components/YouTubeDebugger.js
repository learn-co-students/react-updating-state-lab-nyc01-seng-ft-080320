import React from 'react';

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

      bitBoi = e => {
        this.setState(ps => {
            return {
                settings: {
                    ...ps.settings,
                    bitrate: 12,
                }
            }
        })
      }

      rezzy = e => {
        this.setState(ps => {
            return {
                settings: {
                    ...ps.settings,
                    video: {
                        ...ps.settings.video,
                        resolution: '720p'
                    }

                }
            }
        })
      }

      render() {
          return(
              <div>
                <button
                className = 'bitrate'
                onClick = {this.bitBoi}
                ></button>

                <button
                className = 'resolution'
                onClick = {this.rezzy}
                ></button>
              </div>
          )
      }
}

export default YouTubeDebugger