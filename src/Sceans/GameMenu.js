import Renderer from "../renderer.js"
import Chess from "./Games/Chess.js"
import ColorSwitch from "./Games/ColorSwitch.js"
import Sokoban from "./Games/Sokoban.js"

export default class GameMenu {
	constructor() {
		this.renderer = new Renderer()
		this.options = ["Color Switch", "Chess", "Sokoban"]

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
					this.changeScean(ColorSwitch)
					break
				case 1:
					this.changeScean(Chess)
					break
				case 2:
					this.changeScean(Sokoban)
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
