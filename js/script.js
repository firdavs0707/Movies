let elList = document.querySelector('.js-list');

let normalizedMovies = [];

movies.forEach((movie) => { 
  normalizedMovies.push({
    title: movie.Title,
    "imdb_rating": movie.imdb_rating,
    "runtime": movie.runtime,
    "language": movie.language,
    "movie_year": movie.movie_year,
    "Categories": movie.Categories,
    youtube: `https://www.youtube.com/watch?v=${movie.ytid}`,
    imgHD: `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
  })
})

normalizedMovies.forEach(movie =>{
  let a = CreateElement('a');
  let li = CreateElement('li');
  let img = CreateElement('img', 'card-img-top');
  let title = CreateElement('h4');
  let rating = CreateElement('p');
  let time = CreateElement('p');
  let categ = CreateElement('h6');
  let language = CreateElement('p');
  let movieYear = CreateElement('p');
  let cardBody = CreateElement('div')

  a.appendChild(li)
  a.href = movie.youtube;
  a.classList.add('text-decoration-none')

  title.textContent = movie.title;
  categ.textContent = `${movie.Categories}`
  rating.textContent = `${movie.imdb_rating} ⭐️`;
  time.textContent = `${movie.runtime} Min`;
  language.textContent = `${movie.language}`
  movieYear.textContent = `${movie.movie_year}`
  img.src = movie.imgHD;
  img.alt = movie.title;
  
  
  if (categ.length > 15) {
    categ.textContent = ''
  }


  elList.appendChild(a)
  cardBody.append(title, categ, rating, time, language, movieYear)

  img.classList.add('card-img-top', 'd-block', 'h-25', 'mx-auto')
  title.classList.add('card-title', 'text-center')
  categ.classList.add('card-text', 'm-1', 'text-center')
  rating.classList.add('card-text', 'm-1', 'text-center')
  language.classList.add('card-text', 'm-1', 'text-center')
  movieYear.classList.add('card-text', 'm-1', 'text-center')
  time.classList.add('card-text', 'm-1', 'text-center')
  cardBody.classList.add('card-body')
  
  li.append(img, cardBody)
  li.classList.add('card', 'm-2', 'width','text-light', 'bg-gradient')
  
})


console.log(normalizedMovies);