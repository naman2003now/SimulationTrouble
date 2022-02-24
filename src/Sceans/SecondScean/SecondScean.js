import Renderer from "../../renderer.js"
var ticX = [
	"\\     /",
	" \\   / ",
	"  \\ /  ",
	"   x   ",
	"  / \\  ",
	" /   \\ ",
	"/     \\",
]
var ticY = [
	"   ---   ",
	" /     \\ ",
	"|       |",
	"|       |",
	"|       |",
	" \\     / ",
	"   ---   ",
]

var grid = [
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"----------------------------------------",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"----------------------------------------",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
	"             |            |            ",
]

export default class SecondScean {
	constructor() {
		this.renderer = new Renderer()
		this.terminalText = "root@tic-tac-toe> "
		this.minTextLength = this.terminalText.length
		this.renderer.write(
			"Play to win! Controls(commands): top right, bottom left, middle middle",
			0,
			0
		)
		window.onkeydown = this.onKeyDown
		window.onkeyup = this.onKeyUp
	}

	update = (toDraw = true) => {
		this.renderer.clearLine(0)
		this.renderer.clearLine(1)
		this.renderer.clearLine(2)
		this.renderer.write(
			"Play to win! Controls(commands): top right, bottom left, middle middle, etc..",
			0,
			0
		)

		this.renderer.write(this.terminalText + "_", 0, 2)
		this.renderer.drawSprite(ticX, 27, 20)
		this.renderer.drawSprite(ticX, 27, 12)
		this.renderer.drawSprite(grid, 12, 12)
		if (toDraw) {
			this.renderer.draw()
		}
	}

	onKeyDown = (event) => {
		if (event.key.length == 1) {
			this.terminalText += event.key
		} else if (event.key == "Backspace") {
			if (this.terminalText.length > this.minTextLength) {
				this.terminalText = this.terminalText.slice(0, -1)
			}
		} else if (event.key == "Enter") {
			this.play(
				this.terminalText.slice(
					this.minTextLength,
					this.terminalText.length
				)
			)
			this.terminalText = this.terminalText.slice(0, this.minTextLength)
		}
	}

	play = (playString) => {
		let keyWords = playString.toLowerCase().trim().split(" ")
		if (keyWords.length == 2) {
			console.log(keyWords)
		}
	}

	onKeyUp = (event) => {}
}
