import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList/ImageList';
import { Segment } from 'semantic-ui-react';

class App extends React.Component {
  onSearchSubmit = term => {
    console.log(term);
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
            <ImageList />
          </Segment>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
