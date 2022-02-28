import Renderer from "../../renderer.js"
import mainmenu from "../mainmenu.js"
import TicTacToe from "./TicTacToe.js"
import Minesweeper from "./Minesweeper.js"

var background = [
	"#################################",
	"#                               #",
	"#          [][][]     0         #",
	"#          []                   #",
	"#          []                   #",
	"#          []                   #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#################################",
]

export default class SnakeGame {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Snake Game with it's AI", 2, 1)
		this.renderer.write("Tech: HTML, CSS and Javascript", 2, 3)
		this.renderer.drawSprite(background, 10, 10)
		if (toDraw) {
			this.renderer.draw()
		}
		this.renderer.write(
			"B: Back    N: Next    M: Main menu    V: View   S: View source code",
			0,
			38
		)
		this.lastFrameTime = Date.now()
	}

	onKeyDown = (event) => {
		if (event.key == "B" || event.key == "b") {
			this.changeScean(Minesweeper)
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(TicTacToe)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.href =
				"https://github.com/naman2003now/SnakeGameHTML5Canvas"
		} else if (event.key == "V" || event.key == "v") {
			window.location.href =
				"https://naman2003now.github.io/SnakeGameHTML5Canvas/"
		}
	}

	onKeyUp = (event) => {}
}
