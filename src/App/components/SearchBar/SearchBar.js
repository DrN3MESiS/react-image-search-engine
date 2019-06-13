import React from 'react';
import { Input } from 'semantic-ui-react';
class SearchBar extends React.Component {
  state = { inputVal: '' };
  handleInputChange = event => {
    console.log(event.target.value);
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <Input
            icon="search"
            placeholder="Search..."
            size="big"
            value={this.state.inputVal}
            onChange={e => {
              this.setState({ inputVal: e.event.value });
            }}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
