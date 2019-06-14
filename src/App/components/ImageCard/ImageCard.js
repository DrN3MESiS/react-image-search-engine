import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <React.Fragment>
        <div>
          <img alt={description} src={urls.regular} ref={this.imageRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCard;
