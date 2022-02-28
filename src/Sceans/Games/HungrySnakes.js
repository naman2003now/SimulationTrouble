import Renderer from "../../renderer.js"
import GameMenu from "../GameMenu.js"
import mainmenu from "../mainmenu.js"
import TicTacToe from "./TicTacToe.js"

var background = [
	"#################################",
	"#                               #",
	"#          [][]       0         #",
	"#          []                   #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#              [][]   []        #",
	"#              []     []        #",
	"#                     []        #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#                               #",
	"#################################",
]

export default class HungrySnakes {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Hungry snakes", 2, 1)
		this.renderer.write("Tech: C++ and SFML", 2, 3)
		this.renderer.drawSprite(background, 10, 10)
		if (toDraw) {
			this.renderer.draw()
		}
		this.renderer.write(
			"B: Back    N: Next    M: Main menu   S: View source code",
			0,
			38
		)
		this.lastFrameTime = Date.now()
	}

	onKeyDown = (event) => {
		if (event.key == "B" || event.key == "b") {
			this.changeScean(TicTacToe)
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(GameMenu)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.href =
				"https://github.com/naman2003now/Hungry-Snakes"
		}
	}

	onKeyUp = (event) => {}
}
