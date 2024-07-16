import axios from 'axios';


export async function searchImg(query) {


  const API_KEY = '44806225-40e07737f22f709bd193bb0f7';
  const URL = `https://pixabay.com/api/?key=${API_KEY}`;
  const imageType = 'photo';
  const orientation = 'horizontal';
  const safeSearch = true;

  let currentPage = 1;
  try {
    const response = await axios.get(`${URL}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${currentPage}&per_page=15`)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}


