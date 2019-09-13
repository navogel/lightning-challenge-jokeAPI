console.log("hi");

const DOM = {
	printJoke: data => {
		let joke = data.joke;
		let jokeholder = document.querySelector("#joker");
		console.log(joke);
		jokeholder.innerHTML += `<p>${joke}</p>`;
		console.log("joker", jokeholder.innerHTML);
	}
};

const API = {
	grabJoke: () => {
		return fetch("https://icanhazdadjoke.com/", {
			headers: {
				Accept: "application/json"
			}
		}).then(response => response.json());
	}
};

document.querySelector("#jokes").addEventListener("click", event => {
	API.grabJoke().then(data => DOM.printJoke(data));
});
