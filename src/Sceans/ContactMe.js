import Renderer from "../renderer.js"
import mainmenu from "./mainmenu.js"

export default class ContactMe {
	constructor() {
		this.renderer = new Renderer()
		this.options = ["Instagram", "Github", "Main Menu"]

		this.currentSelection = 0
	}

	update = (toDraw = true) => {
		this.renderer.write("CONTACT ME", 35, 5)

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
					window.location.href =
						"https://www.instagram.com/naman2003now"
					break
				case 1:
					window.location.href = "https://github.com/naman2003now"
					break
				case 2:
					this.changeScean(mainmenu)
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
