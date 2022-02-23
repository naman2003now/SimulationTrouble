export default class Renderer {
	constructor(text, number) {
		this.text = text
		this.maxCharacters = number
	}

	renderText() {
		let domOutput = ""
		let tagStarting = '<div class="letter">'
		let tagEnding = "</div>"
		for (let i = 0; i < this.maxCharacters; i++) {
			if (i < this.text.length) {
				domOutput += tagStarting + this.text.charAt(i) + tagEnding
			} else {
				domOutput += tagStarting + i%10 + tagEnding
			}
		}
		return domOutput
	}
}
