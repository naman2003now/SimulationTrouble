import Renderer from "../renderer.js"
import mainmenu from "./mainmenu.js"

export default class Introduction {
	constructor() {
		this.story = [
			"Hello, world!, Press enter to contine...",
			"I am Naman Agrawal. A game developer!",
			"I have been doing game development for 2+ years. I am not going to bore much    with this non-sense and let's skip to the good part!",
		]
		this.currentLine = 0
		this.renderer = new Renderer()
		this.renderer.animateText(this.story[this.currentLine], 0, 20)
		this.changeScean = null
	}

	update = () => {}

	onKeyDown = (event) => {
		if (event.key == "Enter" && !this.renderer.animating) {
			this.currentLine++
			if (this.currentLine >= this.story.length) {
				this.changeScean(mainmenu)
			} else {
				this.renderer.clear()
				this.renderer.draw()
				this.renderer.animateText(this.story[this.currentLine], 0, 19)
			}
		}
	}
}
