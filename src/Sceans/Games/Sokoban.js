import Renderer from "../../renderer.js"
import mainmenu from "../mainmenu.js"
import Chess from "./Chess.js"
var background = [
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
	"",
	"######## @@@@@@@@                            ########",
	"######## @@@@@@@@                            ########",
	"######## @@@@@@@@                            ########",
	"######## @@@@@@@@                            ########",
	"",
	"########          ++++++++            OOOO   ########",
	"########          ++++++++          O      O ########",
	"########          ++++++++          O      O ########",
	"########          ++++++++            OOOO   ########",
	"",
	"########                                     ########",
	"########                                     ########",
	"########                                     ########",
	"########                                     ########",
	"",
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
	"######## ######## ######## ######## ######## ########",
]

export default class Sokoban {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
	}

	update = (toDraw = true) => {
		this.renderer.write("Sokoban", 2, 1)
		this.renderer.write("Tech: HTML, CSS and Javascript", 2, 3)
		this.renderer.drawSprite(background, 8, 8)
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
			this.changeScean(Chess)
		} else if (event.key == "N" || event.key == "n") {
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.replace("https://github.com/naman2003now/Sokobon")
		} else if (event.key == "P" || event.key == "p") {
			window.location.replace("https://naman2003now.github.io/Sokobon/")
		}
	}

	onKeyUp = (event) => {}
}
