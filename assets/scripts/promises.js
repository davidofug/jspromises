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
