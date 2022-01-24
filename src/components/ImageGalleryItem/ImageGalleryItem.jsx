import PropTypes from 'prop-types';

import { ImageItem, GalleryItemImg } from './ImageGalleryItem.styled';
function ImageGalleryItem({ webformatURL, tags }) {
  console.log(webformatURL);
  return (
    <ImageItem>
      <GalleryItemImg src={webformatURL} alt={tags} />
    </ImageItem>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
};
export default ImageGalleryItem;
