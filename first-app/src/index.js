//React is a JS library used to produce HTML

//Components & views are code snippets that produce HTML

//Component is a collection of JS function that produce HTML


//We need to tell react to take component and place is in DOM

//JSX is subset of JS that allows us to write a look like HTML inside of JS but is really JS.

import React , { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import {VideoList} from './components/video-list';
import YTSearch from 'youtube-api-search'
;
import './css/index.css';
import {VideoDetail} from './components/video-detail';
import _  from 'lodash';
const API_KEY = "AIzaSyAyfYJIEtJDJ7r-1pMK5nPNQ7Hp7lMWYsk";



//Functional approach
// const App = () => {
//   return (<div>
//   <SearchBar />
//   </div>);
// }


//Class based approach
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
    // YTSearch({key: API_KEY , term: 'surfboards'} ,(videos) => {
    //   this.setState({ videos : videos,
    //     selectedVideo: videos[0]
    //   });
      //Same as above can be used when key is same
      //this.setState({videos});
    // });
  }

  videoSearch(term) {
    YTSearch({key: API_KEY , term: term} ,(videos) => {
      this.setState({ videos : videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 400);
    return (<div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos}/>
      </div>);
    }
  }

ReactDOM.render(<App /> , document.querySelector('.container'));
