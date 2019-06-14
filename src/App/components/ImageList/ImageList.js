import React from 'react';

const ImageList = props => {
  console.log('Received Data: ', props.data.length);

  return (
    <React.Fragment>
      <div />
    </React.Fragment>
  );
};

ImageList.propTypes = {
  data: [],
};

export default ImageList;
