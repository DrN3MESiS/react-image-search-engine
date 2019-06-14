import './style.css';
import React from 'react';
import { Header } from 'semantic-ui-react';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = props => {
  const length = props.data.length;

  const images = props.data.map(element => {
    return <ImageCard key={element.id} image={element} />;
  });

  return (
    <React.Fragment>
      <div>
        {props.changed ? (
          <Header size="medium">Found {length} images.</Header>
        ) : (
          <div />
        )}
        <div className="image-list">{images}</div>
      </div>
    </React.Fragment>
  );
};

export default ImageList;
