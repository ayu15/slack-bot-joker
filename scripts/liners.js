class Liners {
	constructor() {
	}

	getJokeOn(culprit) {
		let joke;
		switch (true) {
			case culprit.toLowerCase().includes('ayush'):
				joke = "Ayush is genius";
				break;
			case culprit.toLowerCase().includes('linu'):
				joke = "Linu is performance tester";
				break;
			default:
				joke = `Sorry I don't want to comment on ${culprit.toUpperCase()}`
		}
		return joke;
	}
}
module.exports = new Liners();
