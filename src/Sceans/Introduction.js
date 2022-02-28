import Renderer from "../renderer.js"
import mainmenu from "./mainmenu.js"

export default class Introduction {
	constructor() {
		this.story = [
			"Hello, world! Press enter to continue...",
			"I am Naman Agrawal. A game developer!",
			"I have been developing games for more than 2 years. I am not going to bore you  much with this nonsense. Let's skip to the good part!",
		]
		this.currentLine = 0
		this.renderer = new Renderer()
		this.currentAnimation = this.renderer.animateText(
			this.story[this.currentLine],
			0,
			19
		)
		this.changeScean = null
	}

	update = () => {}
	onKeyDown = (event) => {
		if (event.key == "Enter") {
			if (!this.renderer.animating) {
				this.currentLine++
				if (this.currentLine >= this.story.length) {
					this.changeScean(mainmenu)
				} else {
					this.renderer.clear()
					this.renderer.draw()
					this.currentAnimation = this.renderer.animateText(
						this.story[this.currentLine],
						0,
						19
					)
				}
			} else {
				console.log(this.currentAnimation)
				clearInterval(this.currentAnimation)
				this.renderer.animating = false
				this.renderer.clear()
				this.renderer.write(this.story[this.currentLine], 0, 19, false)
				this.renderer.draw()
			}
		}
	}
}
