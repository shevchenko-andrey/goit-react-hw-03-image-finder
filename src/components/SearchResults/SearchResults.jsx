import status from '../../Constants/status';
import ImageGallery from '../ImageGallery';
import Button from 'components/Button';
const { RESOLVED, RESJECTED, PENDING } = status;
function SearchResults({ status, images, onClick }) {
  if (status === RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        <Button onClick={onClick} />
      </>
    );
  } else {
    return <div></div>;
  }
}

export default SearchResults;
