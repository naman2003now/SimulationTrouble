import Renderer from "../../renderer.js"

export default class StoryTime {
	constructor() {
		this.story = [
			"This the introductary story time! Press enter to continue...",
			"Here we are going to explain the story of our game",
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
				this.changeScean()
			} else {
				this.renderer.clear()
				this.renderer.draw()
				this.renderer.animateText(this.story[this.currentLine], 0, 20)
			}
		}
	}
}
