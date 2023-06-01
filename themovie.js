const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo',
  },
};

function getFetchPopularFilms(params) {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options1
  )
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(err => console.error(err));
}

const wrapEl = document.getElementById('js-wrap');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWUzM2Q5ZjIwZjlhNmU0ZTcxNGU2N2FlM2JjZTdhNSIsInN1YiI6IjY0Nzg5ZjI1MDc2Y2U4MDEyOGZiY2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgp-whkIrWAK4eHf9B-LgEQ9c39n98ES3eZ_2XSy_lo',
  },
};

function getTrailerByFilmId(id) {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(data => {
      const key = data.results[0].key;
      console.log(data);
      wrapEl.innerHTML = `
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${key}
  'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;
    })
    .catch(err => {
      wrapEl.innerHTML = `
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `;
    });
}
