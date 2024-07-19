import axios from 'axios';


export async function searchImg({
  q = '',
  page = 1,
  per_page = 15,
} = {}) {


  const API_KEY = '44806225-40e07737f22f709bd193bb0f7';
  const URL = `https://pixabay.com/api/?key=${API_KEY}`;
  const imageType = 'photo';
  const orientation = 'horizontal';
  const safeSearch = true;


  const axiosItem = await axios.get(`${URL}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`,
    {
      params: {
        q,
        page,
        per_page
      }
    })

  return axiosItem.data;
}

