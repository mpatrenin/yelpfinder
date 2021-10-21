import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Yelp from '../util/yelp.js'

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  };

  searchYelp(term, location, sortBy){
    document.getElementById("Negative").style.display = "none";
    var input = document.getElementById("InputField");
    var input2 = document.getElementById("InputField2");
    if (input.value.length > 0 && input2.value.length > 0) {
      Yelp.searchYelp(term, location, sortBy)
      .then((businesses) => {
        this.setState({ businesses: businesses });
      })
      .catch((e) =>{
        console.log(e);
        document.getElementById('root').style.cursor = `default`;
          this.setState({ businesses: [] });
          document.getElementById("Negative").style.display = "inline";
      })
    } else {
      this.setState({ businesses: [] });
    }
  }

  render() {

    return (
      <div className="App">
        <h1>YelpFinder</h1>
        <SearchBar searchYelp={this.searchYelp} />
          <div id="Negative"><h1>No results :( Try something else!</h1></div>
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;