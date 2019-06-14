import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const ImageList = props => {
  const length = props.data.length;
  const images = props.data.map(element => {
    return <Image src={element.urls.regular} alt={element.created_at} />;
  });
  return (
    <React.Fragment>
      <div>
        {props.changed ? (
          <Header size="medium">Found {length} images.</Header>
        ) : (
          <div />
        )}

        {images}
      </div>
    </React.Fragment>
  );
};

export default ImageList;
