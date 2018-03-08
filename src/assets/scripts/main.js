import WebFont from "webfontloader";

class Dwma {
	static start() {
		new Dwma();
	}

	constructor() {
		this.init()
	}

	init() {
		Promise
			.all([
				this.domReady(),
				this.fontReady(),
				])
			.then(this.ready.bind(this))
	}

	domReady() {
		return new Promise(resolve => {
			document.addEventListener('DOMContentLoaded', () => {
				resolve();
			})
		})
	}

	fontReady() {
		return new Promise((resolve, reject) => {
			WebFont.load({
				google:{
					families: ['Satisfy'],
				},
				active: resolve,
				inactive: reject
			})
		})
	}

	ready() {
		document.documentElement.classList.add('ready');
	}
}

Dwma.start();