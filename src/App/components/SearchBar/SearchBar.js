import React from 'react';
import { Input } from 'semantic-ui-react';
class SearchBar extends React.Component {
  handleInputChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <Input
            icon="search"
            placeholder="Search..."
            size="big"
            onChange={this.handleInputChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
