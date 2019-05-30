import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  // allows for content to be put on the page
  constructor() {
    super();
    // Creates an initial state with an empty array for the shows
    this.state = {
      shows: [],
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
    console.log(this.state.userInput);

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
      console.log(response);

      // have shows equal the response (which is equal to the data value only) and clear the userInput
      this.setState({
        shows: response,
        userInput: ''
      })
    })
  } // end of getTvData




  // this is what will be built to the page:
  render() {
    return (
      <div className="App">
        <form action="submit">
        <label htmlFor="tvShowInput" className="visuallyHidden">Enter the name of a TV Show to find out more information about it.</label>
          <input type="text" id="tvShowInput" placeholder="Enter a TV Show" onChange={this.handleChange} value={this.state.userInput} required/>
          <button onClick={this.getTvData}>Click here</button>
        </form>
      </div>
    );
  } // end of render
} // end of class App extending Component

export default App;
