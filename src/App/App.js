import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList/ImageList';
import { Segment } from 'semantic-ui-react';
import unsplash from './api/unsplash';

class App extends React.Component {
  state = { image_data: [], changed: false };

  /*onSearchSubmit = term => {
    console.log(term);
    Axios.get(`https://api.unsplash.com/search/photos?query=${term}`, {
      headers: {
        Authorization:
          'Client-ID b61471995f6e5c4e0b34e6de26d66f43f77fe24d619f764459c2efbb3cd10dc9',
      },
    }).then(res => {
      console.log(res.data.results);
      this.setState({ img_data: res.data.results });
    });
  };*/

  onSearchSubmit = async term => {
    const res = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });

    this.setState({ image_data: res.data.results, changed: true });
  };

  render() {
    return (
      <React.Fragment>
        <div
          align="CENTER"
          style={{
            width: 100 + 'vw',
            height: 100 + 'vh',
            padding: 1 + 'rem',
          }}
        >
          <Segment>
            <SearchBar onUserSubmit={this.onSearchSubmit} />
          </Segment>
          <Segment>
            <ImageList
              data={this.state.image_data}
              changed={this.state.changed}
            />
          </Segment>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
