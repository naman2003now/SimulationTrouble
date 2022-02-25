import SecondScean from "./Sceans/SecondScean/SecondScean.js"
import TicTacToe from "./Sceans/TicTacToe/TIcTacToe.js"
import Captcha from "./Sceans/Captcha/Captcha.js"
import StoryTime from "./Sceans/StoryTime/StoryTime.js"

export default class SceanManager {
	constructor() {
		this.sceans = [StoryTime, Captcha, TicTacToe, SecondScean]
		this.currentSceanIndex = 0
		this.currentScean = new this.sceans[0]()
		this.currentScean.changeScean = this.changeScean
		this.updateLoop = setInterval(() => {
			this.currentScean.update()
		}, 0)
	}

	changeScean = () => {
		window.onkeydown = undefined
		window.onkeyup = undefined
		clearInterval(this.updateLoop)
		let count = 0
		let secondCount = 1
		let change = true
		var changeAnimation = setInterval(() => {
			if (count > 40) {
				if (change) {
					change = false
					this.currentSceanIndex++
					this.currentScean = new this.sceans[
						this.currentSceanIndex
					]()
					this.currentScean.changeScean = this.changeScean
				}
				this.currentScean.renderer.clear()
				this.currentScean.update(false)
				this.currentScean.renderer.write(
					"#".repeat(80 * 40),
					0,
					secondCount
				)
				this.currentScean.renderer.draw()
				secondCount++
				if (secondCount > 40) {
					clearInterval(changeAnimation)
					window.onkeydown = this.currentScean.onKeyDown
					window.onkeyup = this.currentScean.onKeyUp
					this.updateLoop = setInterval(() => {
						this.currentScean.update()
					}, 0)
				}
			} else {
				this.currentScean.renderer.clear()
				this.currentScean.update(false)
				this.currentScean.renderer.write("#".repeat(80 * count), 0, 0)
				this.currentScean.renderer.draw()
				count++
			}
		}, 10)
	}
}
