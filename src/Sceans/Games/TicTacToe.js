import Renderer from "../../renderer.js"
import mainmenu from "../mainmenu.js"
import HungrySnakes from "./HungrySnakes.js"
import SnakeGame from "./SnakeGame.js"

var background = [
	"    \\       /    |    \\       /    |            ",
	"     \\     /     |     \\     /     |            ",
	"      \\   /      |      \\   /      |            ",
	"       \\ /       |       \\ /       |            ",
	"        x        |        x        |            ",
	"       / \\       |       / \\       |            ",
	"      /   \\      |      /   \\      |            ",
	"     /     \\     |     /     \\     |            ",
	"    /       \\    |    /       \\    |            ",
	"------------------------------------------------",
	"                 |    ---------    |            ",
	"                 |   /         \\   |            ",
	"                 |  |           |  |            ",
	"                 |  |           |  |            ",
	"                 |  |           |  |            ",
	"                 |  |           |  |            ",
	"                 |  |           |  |            ",
	"                 |   \\         /   |            ",
	"                 |    ---------    |            ",
	"------------------------------------------------",
	"                 |   ---------     |            ",
	"                 |  /         \\    |            ",
	"                 | |           |   |            ",
	"                 | |           |   |            ",
	"                 | |           |   |            ",
	"                 | |           |   |            ",
	"                 | |           |   |            ",
	"                 |  \\         /    |            ",
	"                 |   ---------     |            ",
]

export default class TicTacToe {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Tic-tac-toe multiplayer", 2, 1)
		this.renderer.write("Tech: HTML, CSS, Javascript and Sockets", 2, 3)
		this.renderer.drawSprite(background, 10, 6)
		if (toDraw) {
			this.renderer.draw()
		}
		this.renderer.write(
			"B: Back    N: Next    M: Main menu    P: Play   S: View source code",
			0,
			38
		)
		this.lastFrameTime = Date.now()
	}

	onKeyDown = (event) => {
		if (event.key == "B" || event.key == "b") {
			this.changeScean(SnakeGame)
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(HungrySnakes)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.href =
				"https://github.com/naman2003now/tic-tac-toe-multiplayer"
		} else if (event.key == "P" || event.key == "p") {
			window.location.href = "https://tic-tac-toe-mplayer.herokuapp.com/"
		}
	}

	onKeyUp = (event) => {}
}
