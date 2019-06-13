import React from 'react';
import { Input } from 'semantic-ui-react';
class SearchBar extends React.Component {
  state = { inputVal: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.inputVal);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onFormSubmit}>
          <Input
            icon="search"
            placeholder="Search..."
            size="big"
            value={this.state.inputVal}
            onChange={e => {
              this.setState({ inputVal: e.target.value });
            }}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
