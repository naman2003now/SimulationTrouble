import Renderer from "../../renderer.js"
import mainmenu from "../mainmenu.js"
import Chess from "./Chess.js"

var circle = [
	"    ####%%%%     ",
	"  ##        %%   ",
	"##            %% ",
	"##            %% ",
	"OO            @@ ",
	"OO            @@ ",
	"  OO        @@   ",
	"    OOOO@@@@     ",
]

export default class ColorSwitch {
	constructor() {
		this.renderer = new Renderer()
		this.lastFrameTime = Date.now()
		this.ballPosition = 20
		this.gravity = 5
		this.velocity = 0
		this.jumpVelocity = -10
	}

	update = (toDraw = true) => {
		this.renderer.clearLine(Math.floor(this.ballPosition))
		this.renderer.write("Color Switch", 2, 1)
		this.renderer.write("Tech: HTML, CSS and Javascript", 2, 3)
		this.renderer.drawSprite(circle, 25, 10)
		this.velocity +=
			(this.gravity * (Date.now() - this.lastFrameTime)) / 1000
		this.ballPosition +=
			(this.velocity * (Date.now() - this.lastFrameTime)) / 1000
		if (this.ballPosition > 30) {
			this.velocity = this.jumpVelocity
		}
		this.renderer.write("O", 33, Math.floor(this.ballPosition))
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
		} else if (event.key == "N" || event.key == "n") {
			this.changeScean(Chess)
		} else if (event.key == "M" || event.key == "m") {
			this.changeScean(mainmenu)
		} else if (event.key == "S" || event.key == "s") {
			window.location.replace(
				"https://github.com/naman2003now/ColorSwitch"
			)
		} else if (event.key == "P" || event.key == "p") {
			window.location.replace(
				"https://naman2003now.github.io/ColorSwitch/"
			)
		}
	}

	onKeyUp = (event) => {}
}
