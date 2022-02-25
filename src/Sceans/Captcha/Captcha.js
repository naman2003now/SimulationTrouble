import Renderer from "../../renderer.js"

var grid = [
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"---------------------------------------------------",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"---------------------------------------------------",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
	"                 |                 |            ",
]

var car = [" _.-.___\\__    ", "|  _      _`-. ", "'-(_)----(_)--`"]
var car3 = [
	"       _______            ",
	"      //  ||\\ \\          ",
	"_____//___||_\\ \\___      ",
	")  _          _    \\      ",
	"|_/ \\________/ \\___|     ",
	"  \\_/        \\_/         ",
]

var plane = [
	"       __|__        ",
	"--------(_)-------- ",
	"  O  O       O  O   ",
]

var plane3 = [
	"       ..                 ",
	" _    \\  '               ",
	" \\ \\ __\\___'______.    ",
	" /_     ;LI LI LI ()``.    ",
	"    /_/ ......_________) ",
	"       /   .'            ",
	"      /  .'                ",
	"      `-`                  ",
]

var selector = [
	" -------------------------",
	"|                         |",
	"|                         |",
	"|                         |",
	"|                         |",
	"|                         |",
	"|                         |",
	"|                         |",
	"|                         |",
	" -------------------------",
]

var car5 = ["      \\      ", '.-`"""""`-.. ', "'=()===()=-'"]

var captchaGrid = [
	[
		[car3, 3, 5],
		[car5, 34, 6],
		[plane3, 55, 4],
	],
	[
		[car3, 3, 15],
		[car5, 34, 16],
		[plane, 56, 17],
	],
	[
		[car3, 3, 25],
		[car5, 34, 27],
		[plane3, 55, 24],
	],
]

export default class TicTacToe {
	constructor() {
		this.renderer = new Renderer()
		this.selectorX = [0, 27, 53]
		this.selectorY = [3, 13, 23]
		this.selectorPosition = {x: 0, y: 0}
		this.sceanRunning = true
		this.selected = []
	}

	update = (toDraw = true) => {
		this.renderer.clear()
		let something_is_left = false

		for (let x = 0; x < 3; x++) {
			for (let y = 0; y < 3; y++) {
				let isSelected = false
				for (let i = 0; i < this.selected.length; i++) {
					if (this.selected[i].x == y && this.selected[i].y == x) {
						isSelected = true
					}
				}
				if (!isSelected) {
					something_is_left = true
					this.renderer.drawSprite(
						captchaGrid[x][y][0],
						captchaGrid[x][y][1],
						captchaGrid[x][y][2]
					)
				}
			}
			this.renderer.write("WASD to move and ENTER to remove.", 21, 0)
			this.renderer.write(
				"Remove all the vehicles to advance forward >>",
				15,
				1
			)
			this.renderer.drawSprite(
				selector,
				this.selectorX[this.selectorPosition.x],
				this.selectorY[this.selectorPosition.y]
			)
			if (toDraw) {
				this.renderer.draw()
			}
		}
		if (!something_is_left) {
			if (this.sceanRunning) {
				this.sceanRunning = false
				this.changeScean()
			}
		}
	}

	onKeyDown = (event) => {
		if (event.key == "ArrowRight") {
			if (this.selectorPosition.x < 2) {
				this.selectorPosition.x += 1
			}
		} else if (event.key == "ArrowLeft") {
			if (this.selectorPosition.x > 0) {
				this.selectorPosition.x -= 1
			}
		} else if (event.key == "ArrowUp") {
			if (this.selectorPosition.y > 0) {
				this.selectorPosition.y -= 1
			}
		} else if (event.key == "ArrowDown") {
			if (this.selectorPosition.y < 2) {
				this.selectorPosition.y += 1
			}
		} else if (event.key == "Enter") {
			let isSelected = false
			for (let i = 0; i < this.selected.length; i++) {
				if (
					this.selected[i].x == this.selectorPosition.x &&
					this.selected[i].y == this.selectorPosition.y
				) {
					isSelected = true
					this.selected.splice(i, 1)
				}
			}
			if (!isSelected) {
				this.selected.push({
					x: this.selectorPosition.x,
					y: this.selectorPosition.y,
				})
			}
		}
	}
	onKeyUp = (event) => {}
}
