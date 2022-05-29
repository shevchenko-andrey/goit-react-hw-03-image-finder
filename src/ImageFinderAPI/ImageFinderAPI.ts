import axios from 'axios';
import IImage from '../interfaces/Image.interface';
const API_KEY = '24406479-58af1b59940bc123ae2a55678';
const imageType = 'image_type=photo&orientation=horizontal';
const perPage = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';

interface Response {
  hits: IImage[];
  total: number;
  totalHits: number;
}

interface ResponseWrapper {
  data: Response;
}

async function SearchImage(query: string, page: number) {
  try {
    const response: ResponseWrapper = await axios.get(
      `?q=${query}&page=${page}&key=${API_KEY}&${imageType}&per_page=${perPage}`
    );
    const { totalHits, hits } = response.data;
    if (totalHits < 1) {
      return;
    }
    const images: IImage[] = hits.map(
      ({ id, webformatURL, largeImageURL, tags }) => {
        return { id, tags, webformatURL, largeImageURL };
      }
    );

    return {
      totalPages: Math.ceil(totalHits / perPage),
      images,
    };
  } catch {
    return;
  }
}
export default SearchImage;
