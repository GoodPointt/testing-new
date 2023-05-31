// CRUD

// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

///////////////////////////// READ {GET}

// function getFromApi(BASE_URL, id) {
//   url = `${BASE_URL}/${id}`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json));
// }

// getFromApi(BASE_URL, 1);
// getFromApi(BASE_URL, 100);
// getFromApi(BASE_URL, '');

/////////////////////////// CREATE {POST}

// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
// function postToApi(BASE_URL, options) {
//   return fetch(BASE_URL, options)
//     .then(response => {
//       if (!response.ok) throw new Error(response.statusText);
//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// const options1 = {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Yo, sup?)',
//     body: 'lalalalaala',
//     userId: 11,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// postToApi(BASE_URL, options1);

//////////////////////// LIVE EXAMPLE ///////////////////////////

const refs = {
  addPost: document.querySelector('.js-add'),
  formWrapper: document.querySelector('.js-form'),
  wrapper: document.querySelector('.js-wrapper'),
  postsList: document.querySelector('.js-posts'),
  errorMsg: document.querySelector('.js-error'),
};

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

refs.addPost.addEventListener('click', handlerAddPost);

function handlerAddPost() {
  refs.formWrapper.innerHTML = `<form style="width: 300px; display: flex; gap: 10px; flex-direction: column" action="submit" class="js-form-add">
        <input type="text" placeholder="Your name..." name="title" />
        <textarea name="body" id="" cols="30" rows="10" placeholder="Your comment..."></textarea>
        <button>Post coment</button>
      </form>`;

  const form = document.querySelector('.js-form-add');
  form.addEventListener('submit', handlerFormSubmit);
}

function handlerFormSubmit(e) {
  e.preventDefault();
  const { title, body } = e.currentTarget.elements;

  const data = {
    title: title.value,
    body: body.value,
  };

  addPostService(data)
    .then(obj => {
      console.log(obj);
      refs.postsList.insertAdjacentHTML('beforeend', createPostMarkup(obj));
    })
    .catch(
      error =>
        (refs.errorMsg.innerHTML = `Oops! Something gonna wrong. Try again! (${error})`)
    )
    .finally(() => {
      refs.formWrapper.innerHTML = '';
      setTimeout(() => {
        refs.errorMsg.innerHTML = '';
      }, 2000);
    });
}

function createPostMarkup({ id, title, body }) {
  console.log(id);
  console.log(title);
  console.log(body);
  return `
  <li data-id="${id}">
          <h2>${title}</h2>
          <p>${body}</p>
        </li>`;
}

function addPostService(data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(BASE_URL, options).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

/////////////////////////// UPDATE {PUT} {PATCH}

////////////////////////// DELETE {REMOVE}
