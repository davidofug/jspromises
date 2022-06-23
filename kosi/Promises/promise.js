const post = document.getElementById("posts");
const test = document.querySelector(".text");
const calls =  document.querySelector(".axis")
// using fetch
const left = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())

    .then((response) => {
      post.innerHTML = response.body;
    })
    .catch((err) => console.error(err));
};

// promises
const right = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((test) => resolve(test))
    .then((result) => reject(result));
});

right
  .then((result) => result.json())
  .then((response) => {
    
    test.innerHTML = `
      <div>
      <img src =${response.thumbnailUrl}</img>
      </div>`;
  })
  .catch((error) => console.log(error));


  // using axios which ia a promise based http client meaning it returns a promise(we need then and catch)
  // we can do GET,POST,UPDATE,DELETE using axiox
  // using a GET request here
  // you could install axios library in your project or use a cdn
  // but i will be using a cdnand link it to my html file
  // yoy do not use .json() anymore here because the reponse from axios is already in that format
// POST
const users = () => {
  axios.get('https://reqres.in/api/users')
    .then(response => {
      const users = response.data.data;
      calls.innerHTML = `
      <div>
      <h3> ${users[0].first_name}${" "}${users[0].last_name}</h3>
      <p>${users[1].email}</p>
    </div>`
  })
}
users()