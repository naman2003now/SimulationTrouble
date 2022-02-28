import Renderer from "../../renderer.js"
import mainmenu from "../mainmenu.js"
import ColorSwitch from "./ColorSwitch.js"
import Sokoban from "./Sokoban.js"
var background = [
	"+++++++++++++++++++++++++++++++++++++++++++++++",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+######       ######       ######       ######+",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+      ######       ######       ######       +",
	"+++++++++++++++++++++++++++++++++++++++++++++++",
]

export default class Chess {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Chess", 2, 1)
		this.renderer.write("Tech: C++, SFML and CMake", 2, 3)
		this.renderer.drawSprite(background, 8, 8)
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
			this.changeScean(ColorSwitch)
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(Sokoban)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.href = "https://github.com/naman2003now/Chess"
		}
	}

	onKeyUp = (event) => {}
}
