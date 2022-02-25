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

var stickMan = [
	"  _|/^   ",
	"   (_oo  ",
	"    |    ",
	"   /|\\  ",
	"    |    ",
	"    LL   ",
]

var suicide = [
	"___________.._______        ",
	"| .__________))______|       ",
	"| | / /      ||              ",
	"| |/ /       ||              ",
	"| | /        ||.-''.         ",
	"| |/         |/  _  \\        ",
	"| |          ||  `/,|        ",
	"| |          (\\\\`_.'         ",
	"| |         .-`--'.          ",
	"| |        /Y . . Y         ",
	"| |       // |   | \\\\        ",
	"| |      //  | . |  \\\\       ",
	"| |     ')   |   |   (`      ",
	"| |          ||'||           ",
	"| |          || ||           ",
	"| |          || ||           ",
	"| |          || ||           ",
	"| |         / | | \\          ",
	'""""""""""|_`-\' `-\' |"""|    ',
	'|"|"""""""        \'"|"|    ',
	"| |                 | |    ",
	": :                 : :    ",
	". .          `'       . .    ",
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
		this.minTextLength = this.terminalText.length
		this.renderer.write(
			'Type "kill me" to advanced forward (This is not going to be in the final game)',
			0,
			0
		)
	}

	update = (toDraw = true) => {
		this.renderer.write(
			'Type "kill me" to advanced forward (This is not going to be in the final game)',
			0,
			0
		)
		this.renderer.clearLine(2)
		this.renderer.write(this.terminalText + "_", 0, 2)
		this.renderer.drawSprite(stickMan, 40, 10)
		this.renderer.drawSprite(suicide, 10, 10)
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
			if (keyWords[0] == "kill" && keyWords[1] == "me") {
				this.changeScean()
			}
		}
	}

	onKeyUp = (event) => {}
}
