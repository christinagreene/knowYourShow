import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import animateScrollTo from 'animated-scroll-to';
import './App.css';
import TvShowInfo from './Components/TvShowInfo.js';

// if using relative photos, have to import them in from the public folder
// import imagename from 'path'; when using img src={imagename}


class App extends Component {
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
      showId: '',
      userInput: '',
      cast: [],
      error: null
    } // end of this.state
  } // end of constructor

  // handles change of text input field
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  } // end of handleChange


  // on submit of the form/button, do the following:
  getTvData = (event) => {

    // prevent default function of form
    event.preventDefault();

    // create variable to save URL info
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${this.state.userInput}`;

    // making the first API call to gather general show info
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
        showId: response.id,
        userInput: ''

        // ensuring that all items are returned before calling getCastData
      }, () => {
          this.getCastData();
      }) // end of this.setState
    }) // end of .then method

    // ERROR HANDLING FOR A BLANK TEXT FIELD OR TEXT THAT DOESN'T MATCH A SHOW NAME FROM API
    .catch((error) => {
      Swal.fire("Please enter a valid TV Show title.");
    })

  } // end of getTvData


  // Second call to API to gather Cast name and photos
  getCastData = () => {
    const castUrl = `https://api.tvmaze.com/shows/${this.state.showId}/cast`;

    axios({
      method: 'GET',
      url: castUrl,
      dataResponse: 'json',
    }).then(responseCast => {

      this.setState({
        cast: responseCast.data,
      })
    })

    // Smooth scroll to results
    animateScrollTo(document.querySelector('.resultsComponent'));
    
  } // end of getCastData
  

  // this is what will be built to the page:
  render() {
    return (
      <div className="App wrapper">
        <header>
          <h1>Know Your Show!</h1>
          <h2>Enter your favourite TV Show title to learn more about it.</h2>
        </header>
      
        <form action="submit">
          <label htmlFor="tvShowInput" className="visuallyHidden">Enter a TV Show name.</label>
          <input type="text" id="tvShowInput" placeholder="Enter a title..." onChange={this.handleChange} value={this.state.userInput} required/>
          <button onClick={this.getTvData}>Tell me more about my show!</button>
        </form>

        <TvShowInfo
          img={this.state.img}
          name={this.state.name}
          genre={this.state.genre}
          showStart={this.state.showStart}
          bio={this.state.bio}
          rating={this.state.rating}

          cast={this.state.cast}
        />

        <footer>
          <p>Created by Christina Greene. Data sourced from <a href="https://www.tzmaze.com">TVmaze</a>.</p>
        </footer>
      </div>
    ); // end of return
  } // end of render
} // end of class App extending Component

export default App