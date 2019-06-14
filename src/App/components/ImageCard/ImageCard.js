import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  state = { spans: null };

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 150);
    this.setState({ spans: span });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <React.Fragment>
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img alt={description} src={urls.regular} ref={this.imageRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCard;
