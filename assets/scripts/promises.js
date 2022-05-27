// Creating the promise
const orderFood = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("I have ordered food");
	}, 3000);

	setTimeout(() => {
		reject("I have not ordered food");
	}, 5000);
});
// Consuming/using the promise

orderFood
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.error(error);
	});

const LEFT = document.getElementById("left");
const ARTICLE = document.getElementById("article");
const RIGHT = document.getElementById("right");

const leftPromise = new Promise((resolve, reject) => {
	fetch("../assets/data/left.txt")
		.then((response) => {
			return response.text();
		})
		.then((text) => resolve(text))
		.catch((error) => reject(error));
});

leftPromise
	.then((text) => (LEFT.innerText = text))
	.catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		// console.log(json);
		ARTICLE.innerHTML = json.body;
	})
	.catch((error) => console.error(error));

//Async/Await

const rightPromise = async () => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const json = await response.json();
		const [post1, post2, post3] = json;
		RIGHT.innerHTML = `
		<aside class="bg-gray p10">
			<h1>Posts</h1>
			<ul>
				<li>${post1.title}</li>
				<li>${post2.title}</li>
				<li>${post3.title}</li>
			</ul>
		</aside>
		`;
	} catch (error) {
		console.error("Post error", error);
	}
};

rightPromise();
