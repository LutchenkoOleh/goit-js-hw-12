import './js/render-functions';
import './js/pixabay-api';
import SimpleLightbox from "simplelightbox";


import iziToast from "izitoast";
import { searchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';

import buttonService from "./js/loadMore";



const params = {
  q: '',
  page: 1,
  per_page: 15,
  maxPage: ''
};


const bottomSpin = document.querySelector('.bottom-spin');
const spin = document.querySelector('.loader');

spin.style.opacity = 0;
bottomSpin.style.opacity = 0;

const btnMore = document.querySelector('.page-btn');
btnMore.addEventListener('click', handleLoadMore);

buttonService.hide(btnMore);


// !HANDLE SEARCH
const form = document.querySelector('.form');
form.addEventListener("submit", handelSearch);

async function handelSearch(e) {
  document.querySelector('.gallery').innerHTML = "";
  params.page = 1;

  e.preventDefault();
  spin.style.opacity = 1;


  const formTarget = e.currentTarget;
  params.q = formTarget.elements.query.value.trim().toLowerCase();

  if (params.q.length <= 0) {
    iziToast.show({
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      messageSize: '16px',
      position: 'topRight',
      message: 'Please write something in the search field'
    })

    spin.style.opacity = 0;
    form.reset();
    return;

  }

  buttonService.show(btnMore);
  buttonService.disable(btnMore)

  try {
    const { hits,
      totalHits } = await searchImg(params)
    returnImg({ hits })

    params.maxPage = Math.ceil(totalHits / params.per_page);

    if (hits.length > 0 && hits.length !== totalHits) {
      buttonService.enable(btnMore);
    } else {
      buttonService.hide(btnMore)
    }

  } catch (error) {
    fetchError(error)
  } finally {
    form.reset();
  }
}



// !SIMPLE LIGHTBOX
let galleryShow = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});



// !RETURN IMG
function returnImg({ hits }) {

  if (hits.length === 0) {
    fetchError()
  } else {
    renderImg(hits)
  }

  galleryShow.on('show.simplelightbox', function () {
  });

  galleryShow.refresh()
  spin.style.opacity = '0';
}


// !FETCH ERROR
function fetchError() {
  iziToast.error({
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
    message: 'Sorry, there are no images matching your search query. Please try again!'
  })
}



// !HANDLE LOAD MORE
async function handleLoadMore() {
  params.page += 1;
  buttonService.disable(btnMore);
  bottomSpin.style.opacity = 1;

  try {
    const { hits } = await searchImg(params)
    returnImg({ hits })

    const galleryItems = document.querySelector('.gallery-item');
    const cardHeight = galleryItems.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
    bottomSpin.style.opacity = 0;
  } catch (error) {
    fetchError(error)
  } finally {
    buttonService.enable(btnMore);
    if (params.page === params.maxPage) {
      buttonService.hide(btnMore)
      btnMore.removeEventListener('click', handleLoadMore)
      iziToast.info({
        backgroundColor: '#7453d7',
        messageColor: '#fff',
        messageSize: '16px',
        position: 'bottomCenter',
        message: "We're sorry, but you've reached the end of search results."
      })
    }
  }
}