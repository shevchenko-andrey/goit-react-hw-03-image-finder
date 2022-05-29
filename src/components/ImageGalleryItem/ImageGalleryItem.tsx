import IImage from 'interfaces/Image.interface';

import {
  ImageItem,
  GalleryItemImg,
  ImageGaleryLink,
} from './ImageGalleryItem.styled';

function ImageGalleryItem({ webformatURL, tags, largeImageURL }: IImage) {
  return (
    <ImageItem>
      <ImageGaleryLink href={largeImageURL}>
        <GalleryItemImg src={webformatURL} alt={tags} />
      </ImageGaleryLink>
    </ImageItem>
  );
}

export default ImageGalleryItem;
