import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import TvShowInfo from './Components/TvShowInfo.js';


class App extends Component {
  // allows for content to be put on the page
  constructor() {
    super();
    // Creates an initial state with an empty array for the shows
    this.state = {
      img: '',
      name: '',
      genre: [],
      showStart: '',
      bio: [],
      rating: '',
      userInput: '',
    }
  } // end of constructor

  // once everything is mounted to the page, the following will occur:
  componentDidMount() {
    
  } // end of componentDidMount()

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      userInput: event.target.value,
    })
  } // end of handleChange

  // on click, do the following:
  getTvData = (event) => {
    event.preventDefault();
    // console.log(this.state.userInput);

    // create variable to save URL info
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${this.state.userInput}`;

    // making the API call to the site
    axios({
      method: 'GET',
      url: url,
      dataResponse: 'json',

      // Once the data has been retrieved(the then method), save it as response
    }).then(response => {
      // have the response only show the data value
      response = response.data

      // removing the element tags from the API's summary so it doesn't show for user
      const cleanSummary = response.summary.replace(/<[^>]+>/g, ' ');

      // have shows equal the response (which is equal to the data value only) and clear the userInput
      this.setState({
        img: response.image.original,
        name: response.name,
        genre: response.genres,
        showStart: response.premiered,
        bio: cleanSummary,
        rating: response.rating.average,
        userInput: ''
      })
    })
  } // end of getTvData




  // this is what will be built to the page:
  render() {
    return (
      <div className="App">
        <div>
          <h1>TV Shows</h1>
          <h2>Enter your favourite TV Show title to learn more about it.</h2>
        </div>
      
        <form action="submit">
          <label htmlFor="tvShowInput" className="visuallyHidden">Enter the name of a TV Show to find out more information about it.</label>
          <input type="text" id="tvShowInput" placeholder="Enter a TV Show" onChange={this.handleChange} value={this.state.userInput} required/>
          <button onClick={this.getTvData}>Click here</button>
        </form>

        <TvShowInfo
          img={this.state.img}
          name={this.state.name}
          genre={this.state.genre}
          showStart={this.state.showStart}
          bio={this.state.bio}
          rating={this.state.rating}
        />
      </div>
    );
  } // end of render
} // end of class App extending Component

export default App