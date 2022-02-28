import Renderer from "../renderer.js"
import mainmenu from "./mainmenu.js"

export default class AboutMe {
	constructor() {
		this.story = ["", "There is nothing more to me that I want you know."]
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
