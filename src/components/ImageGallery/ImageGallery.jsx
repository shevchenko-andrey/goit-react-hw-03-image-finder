import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryImages } from './ImageGallery.styled';
function ImageGallery({ images }) {
  return (
    <GalleryImages>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} tags={tags} webformatURL={webformatURL} />
      ))}
    </GalleryImages>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ImageGallery;
