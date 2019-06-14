import './ImageList.css';
import React from 'react';
import { Header } from 'semantic-ui-react';

const ImageList = props => {
  const length = props.data.length;

  const images = props.data.map(element => {
    const { id, description, urls } = element;
    return <img key={id} src={urls.regular} alt={description} />;
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
