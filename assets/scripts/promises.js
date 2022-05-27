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
