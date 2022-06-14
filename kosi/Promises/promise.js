const post = document.getElementById("posts");
const test = document.querySelector(".text");

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
