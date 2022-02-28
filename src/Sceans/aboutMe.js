import Renderer from "../renderer.js"
import mainmenu from "./mainmenu.js"

export default class AboutMe {
	constructor() {
		this.renderer = new Renderer()
	}

	update = (draw = true) => {
		this.renderer.write(
			"There is nothing more to me that I'd want you to know",
			0,
			20
		)
		if (draw) {
			this.renderer.draw()
		}
	}

	onKeyDown = (event) => {
		if (event.key == "Enter" && !this.renderer.animating) {
			this.changeScean(mainmenu)
		}
	}
}
