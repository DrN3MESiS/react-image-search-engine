import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
//import ImageList from './components/ImageList/ImageList';
import { Segment } from 'semantic-ui-react';

const App = () => {
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
          <SearchBar />
        </Segment>
      </div>
    </React.Fragment>
  );
};

export default App;
