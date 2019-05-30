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




// TO DO LIST:
// 1. find a way to save user input in userInput
// 2. hook up axios request to submit function (so that it doesn't happenon page load but happens on button press)
// 3. retreive info from data list to display on page.




  // once everything is mounted to the page, the following will occur:
  componentDidMount() {
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${this.state.userInput}`;

    // making the API call to the site
    axios({
      method: 'GET',
      url: url,
      dataResponse: 'json',
      // parameters: {
      //   q: 'friends',
      //   format: 'json',
      // }

    // Once the data has been retrieved, save it as _______.
    }).then(response => {
      console.log(response);
      response = response.data

      this.setState({
        shows: response
      })
    })
  } // end of componentDidMount()





  // this is what will be built to the page:
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  } // end of render
} // end of class App extending to Component

export default App;
