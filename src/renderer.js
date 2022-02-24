export default class Renderer {
	constructor() {
		this.screen = []
		this.clear()
		this.terminal = document.getElementById("terminal")
		let domOutput = ""
		let tagStarting = '<div class="letter"'
		let tagEnding = "</div>"

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
	}

	renderText = () => {
		for (let i = 0; i < 80; i++) {
			for (let j = 0; j < 40; j++) {
				document.getElementById(i + "," + j).innerHTML =
					this.screen[i][j]
			}
		}
	}

	write = (writeString, x, y) => {
		let temp = 0
		for (let j = y; j < 40; j++) {
			for (let i = x; i < 80; i++) {
				if (temp < writeString.length) {
					this.screen[i][j] = writeString.charAt(temp)
					document.getElementById(i + "," + j).innerHTML =
						this.screen[i][j]
					temp += 1
				}
			}
		}
	}

	drawSprite = (sprite, x, y) => {
		let count = y
		sprite.forEach((element) => {
			this.write(element, x, count)
			count += 1
		})
	}

	clearLine = (y) => {
		this.write(" ".repeat(80), 0, y)
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
}
