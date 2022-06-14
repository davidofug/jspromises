const post = document.getElementById("posts");
const test = document.querySelector(".text");

// using fetch
  const left = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
            
         
        .then(response => {
             post.innerHTML = response.body
        })
        .catch(err => console.error(err));
}



  