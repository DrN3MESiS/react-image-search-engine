import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <Input icon="search" placeholder="Search..." size="big" />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
