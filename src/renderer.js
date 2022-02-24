export default class Renderer {
	constructor() {
		this.screen = []
		this.oldScreen = []
		this.terminal = document.getElementById("terminal")
		this.screen = []
		this.oldScreen = []
		let domOutput = ""
		let tagStarting = '<div class="letter"'
		let tagEnding = "</div>"
		for (let i = 0; i < 80; i++) {
			let row = []
			let oldRow = []
			for (let j = 0; j < 40; j++) {
				row.push(" ")
				oldRow.push(" ")
			}
			this.screen.push(row)
			this.oldScreen.push(oldRow)
		}
		for (let i = 0; i < 80; i++) {
			domOutput += "<span>"
			for (let j = 0; j < 40; j++) {
				domOutput +=
					tagStarting +
					'id="' +
					i +
					"," +
					j +
					'">' +
					this.screen[i][j] +
					tagEnding
			}
			domOutput += "</span>"
		}
		this.terminal.innerHTML = domOutput
		this.clear()
	}

	renderText = () => {
		for (let i = 0; i < 80; i++) {
			for (let j = 0; j < 40; j++) {
				document.getElementById(i + "," + j).innerHTML =
					this.screen[i][j]
			}
		}
	}

	writeDepricated = (writeString, x, y, alpha = true) => {
		let temp = 0
		for (let j = y; j < 40; j++) {
			for (let i = x; i < 80; i++) {
				if (
					temp < writeString.length &&
					!(writeString.charAt(temp) == " " && alpha)
				) {
					this.screen[i][j] = writeString.charAt(temp)
					document.getElementById(i + "," + j).innerHTML =
						this.screen[i][j]
				}
				temp += 1
			}
		}
	}

	write = (writeString, x, y, alpha = true) => {
		let temp = 0
		for (let j = y; j < 40; j++) {
			for (let i = x; i < 80; i++) {
				if (
					temp < writeString.length &&
					!(writeString.charAt(temp) == " " && alpha)
				) {
					this.screen[i][j] = writeString.charAt(temp)
				}
				temp += 1
			}
		}
	}

	draw = () => {
		for (let j = 0; j < 40; j++) {
			for (let i = 0; i < 80; i++) {
				if (this.oldScreen[i][j] != this.screen[i][j]) {
					0
					document.getElementById(i + "," + j).innerHTML =
						this.screen[i][j]
					this.oldScreen[i][j] = this.screen[i][j]
				}
			}
		}
	}

	drawSprite = (sprite, x, y, alpha = true) => {
		let count = y
		sprite.forEach((element) => {
			this.write(element, x, count, alpha)
			count += 1
		})
	}

	clearLine = (y) => {
		this.write(" ".repeat(80), 0, y, false)
	}

	clear = () => {
		this.screen = []
		for (let i = 0; i < 80; i++) {
			let row = []
			for (let j = 0; j < 40; j++) {
				row.push(" ")
			}
			this.screen.push(row)
		}
	}

	animateText = (text, x, y, letterIntravel = 70) => {
		let tempKeyDown = window.onkeydown
		let tempKeyUp = window.onkeyup
		let i = x
		let j = y
		let temp = 0
		let animation = setInterval(() => {
			if (temp < text.length) {
				this.screen[i][j] = text.charAt(temp)
				document.getElementById(i + "," + j).innerHTML =
					this.screen[i][j]
				if (i < 79) {
					document.getElementById(i + 1 + "," + j).innerHTML = "_"
				}
			} else {
				clearInterval(animation)
				window.onkeydown = tempKeyDown
				window.onkeyup = tempKeyUp
				setTimeout(() => {
					this.clear()
					this.draw()
				}, 1000)
			}
			temp += 1
			i++
			if (i >= 80) {
				i = 0
				j++
			}
		}, letterIntravel)
	}
}
