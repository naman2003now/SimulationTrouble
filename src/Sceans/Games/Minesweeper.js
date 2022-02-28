import mainmenu from "../mainmenu.js"
import Renderer from "../../renderer.js"
import Sokoban from "./Sokoban.js"
import SnakeGame from "./SnakeGame.js"

var background = [
	"1 1 1 2 - 1 # 1 - - - - - - - - - - - 1",
	"",
	"- 3 2 1 # # 1 - - - - - - - - - - - 1 #",
	"",
	"3 - - 1 # # 1 - - - - - - - - - - - 1 #",
	"",
	"2 - 5 3 2 # - - - - - - - - - - - 2 1 #",
	"",
	"1 1 3 - 3 - - - - - - - - - - 3 3 3 1 1",
	"",
	"# # 2 2 - - - - - - - - - - 3 - - 3 - 2",
	"",
	"1 1 1 - - - - - - - - - - 3 4 2 3 4 - 2",
	"",
	"- 3 - - - - - - - - - - 3 - 1 2 3 - 4 3",
	"",
	"- - - - - - - - - - - - 3 2 2 5 - 7 - -",
	"",
	"- - - - - - - - - - 3 1 1 1 - 5 - - 4 3",
]
export default class Minesweeper {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Minesweeper", 2, 1)
		this.renderer.write("Tech: C++, SFML and CMake", 2, 3)
		this.renderer.drawSprite(background, 10, 6)
		if (toDraw) {
			this.renderer.draw()
		}
		this.renderer.write(
			"B: Back    N: Next    M: Main menu  S: View source code",
			0,
			38
		)
		this.lastFrameTime = Date.now()
	}

	onKeyDown = (event) => {
		if (event.key == "B" || event.key == "b") {
			this.changeScean(Sokoban)
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(SnakeGame)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.href =
				"https://github.com/naman2003now/MinesweeperSFML"
		}
	}

	onKeyUp = (event) => {}
}
