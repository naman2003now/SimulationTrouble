import Renderer from "../renderer.js"
import AboutMe from "./aboutMe.js"
import ContactMe from "./ContactMe.js"
import GameMenu from "./GameMenu.js"
import ColorSwitch from "./Games/ColorSwitch.js"

export default class mainmenu {
	constructor() {
		this.renderer = new Renderer()
		this.options = ["My projects", "More about me", "Contact me"]

		this.gameOrder = [ColorSwitch]

		this.currentSelection = 0
	}

	update = (toDraw = true) => {
		this.renderer.write("MAIN MENU", 35, 5)

		for (let i = 0; i < this.options.length; i++) {
			this.renderer.write("  " + this.options[i], 0, 15 + 2 * i, false)
			if (this.currentSelection == i) {
				this.renderer.write(
					"> " + this.options[i],
					0,
					15 + 2 * i,
					false
				)
			}
		}

		this.renderer.write(
			"Use arrow keys to navigate and enter to select",
			2,
			38
		)
		if (toDraw) {
			this.renderer.draw()
		}
	}

	onKeyDown = (event) => {
		if (event.key == "ArrowDown") {
			this.currentSelection++
		} else if (event.key == "ArrowUp") {
			this.currentSelection--
		} else if (event.key == "Enter") {
			switch (this.currentSelection) {
				case 0:
					this.changeScean(GameMenu)
					break
				case 1:
					this.changeScean(AboutMe)
					break
				case 2:
					this.changeScean(ContactMe)
					break
			}
		}

		if (this.currentSelection == this.options.length) {
			this.currentSelection = 0
		} else if (this.currentSelection == -1) {
			this.currentSelection = this.options.length - 1
		}
	}

	onKeyUp = (event) => {}
}