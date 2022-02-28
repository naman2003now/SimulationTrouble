import Renderer from "../renderer.js"
import Chess from "./Games/Chess.js"
import ColorSwitch from "./Games/ColorSwitch.js"
import HungrySnakes from "./Games/HungrySnakes.js"
import Minesweeper from "./Games/Minesweeper.js"
import SnakeGame from "./Games/SnakeGame.js"
import Sokoban from "./Games/Sokoban.js"
import TicTacToe from "./Games/TicTacToe.js"
import mainmenu from "./mainmenu.js"

export default class GameMenu {
	constructor() {
		this.renderer = new Renderer()
		this.options = [
			"Color Switch",
			"Chess",
			"Sokoban",
			"Minesweeper",
			"SnakeGame",
			"Tic Tac Toe",
			"Hungry Snakes",
			"More Projects",
			"Main Menu",
		]

		this.gameOrder = [ColorSwitch]

		this.currentSelection = 0
	}

	update = (toDraw = true) => {
		this.renderer.write("MY PROJECTS", 35, 5)

		for (let i = 0; i < this.options.length; i++) {
			this.renderer.write("  " + this.options[i], 0, 10 + 2 * i, false)
			if (this.currentSelection == i) {
				this.renderer.write(
					"> " + this.options[i],
					0,
					10 + 2 * i,
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
				case 3:
					this.changeScean(Minesweeper)
					break
				case 4:
					this.changeScean(SnakeGame)
					break
				case 5:
					this.changeScean(TicTacToe)
					break
				case 6:
					this.changeScean(HungrySnakes)
					break
				case 7:
					window.location.href = "https://github.com/naman2003now"
					break
				case 8:
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
