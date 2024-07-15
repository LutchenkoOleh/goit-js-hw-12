import axios from 'axios';


export async function searchImg(query) {
  let page = 1;
  let perPage = 15;
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page
  });


  const API_KEY = '44806225-40e07737f22f709bd193bb0f7';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&${params}`;
  const imageType = 'photo';
  const orientation = 'horizontal';
  const safeSearch = true;


  const response = await
    axios.get(`${URL}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`)
  return response.data;

}


