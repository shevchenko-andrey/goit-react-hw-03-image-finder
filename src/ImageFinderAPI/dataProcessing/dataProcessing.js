import status from '../dataProcessing/';
import { toast } from 'react-hot-toast';
import ImageFinderAPI from 'ImageFinderAPI';
const { RESOLVED, RESJECTED } = status;

async function dataProcessing(query, page, state) {
  try {
    const response = await ImageFinderAPI(query, page);
    if (!response) {
      this.setState({
        status: RESJECTED,
      });
      toast.error(`No result found for "${query}"`);
      return;
    }
    const { totalPages, images } = response;
    this.setState(prevState => {
      return {
        totalPages,
        images: [...prevState.images, ...images],
        status: RESOLVED,
      };
    });
  } catch {
    toast.error(`No result found for "${query}"`);
  }
}
export default dataProcessing;
