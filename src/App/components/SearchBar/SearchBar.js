import React from 'react';
import { Input } from 'semantic-ui-react';
class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <Input type="text" placeholder="Search for something..." big />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
