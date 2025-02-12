
const container = document.querySelector('.gallery')

export function renderImg(hits) {

  const markup = hits
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" class="gallery-img">
      </a>
        <div class="text-wrap">
          <p class="img-text">Likes <span class="img-text-span">${likes}</span></p>
          <p class="img-text">Views <span class="img-text-span">${views}</span></p>
          <p class="img-text">Comments <span class="img-text-span">${comments}</span></p>
          <p class="img-text">Downloads <span class="img-text-span">${downloads}</span></p>
        </div>
    </li>`)
    .join("")


  container.insertAdjacentHTML('beforeend', markup);

}