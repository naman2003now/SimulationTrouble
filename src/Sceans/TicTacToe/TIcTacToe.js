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

export default class TicTacToe {
	constructor() {
		this.renderer = new Renderer()
		this.terminalText = "root@tic-tac-toe> "
		this.renderer.write(
			"Play to win! Controls(commands): top right, bottom left, middle middle",
			0,
			0
		)
	}

	update = () => {
		this.renderer.clear()
				this.renderer.write(
					"Play to win! Controls(commands): top right, bottom left, middle middle, etc..",
					0,
					0
				)
		this.renderer.write(this.terminalText + "_", 0, 2)
		this.renderer.drawSprite(grid, 12, 12)
		this.renderer.drawSprite(ticY, 27, 20)
		this.renderer.drawSprite(ticY, 27, 12)
		this.renderer.renderText()
	}

	onKeyDown = (event) => {
		if (event.key.length == 1) {
			this.terminalText += event.key
		}else if(event.key == "Backspace"){
			this.terminalText = this.terminalText.slice(0, -1)
		}
	}

	onKeyUp = (event) => {}
}
