let list = $('.js-list');
var resArr = [];

const findFilm = (searchVal, arr) => {
  let res = arr.filter((el) => el.title.includes(searchVal));
  list.innerHTML = '';
  resArr = [];
  resArr.push(res);
  return resArr;
}

let input = $('.js-input');

input.value = '';


input.addEventListener('change', (evt) => {
  evt.preventDefault();
  input.classList.add('text-upperCase')
  findFilm(input.value, movies);



  resArr.forEach(liv => {
    for (let i = 0; i < liv.length; i++) {
      let a = CreateElement('a');
      let li = document.createElement('li');
      let img = CreateElement('img', 'card-img-top');
      let title = CreateElement('h4');
      let rating = CreateElement('p');
      let time = CreateElement('p');
      let categ = CreateElement('h6');
      let language = CreateElement('p');
      let movieYear = CreateElement('p');
      let cardBody = CreateElement('div');
      a.appendChild(li)
      a.href = liv[i].trailer;
      a.classList.add('text-decoration-none')

      title.textContent = liv[i].title;
      categ.textContent = `${liv[i].categories}`
      rating.textContent = `${liv[i].imdbRating} ⭐️`;
      time.textContent = `${liv[i].runtime} Min`;
      language.textContent = `${liv[i].language}`
      movieYear.textContent = `${liv[i].year}`
      img.src = liv[i].smallPoster;
      img.alt = liv[i].title;
      li.textContent = liv[i].title
      li.classList.add('text-light')
      list.appendChild(a)
      a.appendChild(li);

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
    };
  });
  
})


// 
// 
// 




  

  

