import React from 'react'
import SearchBar from './searchBar'
import youtube from './api/youtube'
import VideoList from './videoList'
import VideoDetail from './videoDetail'

class App extends React.Component{
    state = {videoList : [] , selectedVideo : null}

     componentDidMount(){
          this.onTermSearch('builds');
     }

     onTermSearch = async (term)=>{
        const response = await youtube.get('/search',{
          params : {
              q : term
          }
        })
        this.setState(
            {
             videoList: response.data.items,
             selectedVideo : response.data.items[0]
            })
    }

    onVideoSelect = (video)=>{
        this.setState(
            {selectedVideo : video}
        );
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videoList}/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;