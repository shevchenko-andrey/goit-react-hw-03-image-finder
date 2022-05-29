import { SRLWrapper } from 'simple-react-lightbox';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryImages } from './ImageGallery.styled';
import IImage from 'interfaces/Image.interface';
const options = {
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    disableWheelControls: true,
    disablePanzoom: true,
  },
  caption: {
    showCaption: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar: {
    showProgressBar: false,
  },
};
interface Props {
  images: IImage[];
}

function ImageGallery({ images }: Props) {
  if (images.length === 0) {
    return <></>;
  } else {
    return (
      <SRLWrapper options={options}>
        <GalleryImages>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              id={id}
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </GalleryImages>
      </SRLWrapper>
    );
  }
}

export default ImageGallery;
