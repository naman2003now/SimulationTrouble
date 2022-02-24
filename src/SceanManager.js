import Renderer from "./renderer.js"
import SecondScean from "./Sceans/SecondScean/SecondScean.js"
import TicTacToe from "./Sceans/TicTacToe/TIcTacToe.js"

export default class SceanManager {
	sceans = [TicTacToe, SecondScean]
	currentSceanIndex = 0
	currentScean = new this.sceans[0]()

	changeScean = () => {
		window.onkeydown = undefined
		window.onkeyup = undefined
		let count = 0
		let secondCount = 1
		let change = true
		var changeAnimation = setInterval(() => {
			if (count > 40) {
				if (change) {
					change = false
					this.currentSceanIndex++
					this.currentScean = new SecondScean()
				}
				this.currentScean.renderer.clear()
				//this.currentScean.update(false)
				this.currentScean.renderer.write(
					"#".repeat(80 * 40),
					0,
					secondCount
				)
				this.currentScean.renderer.draw()
				secondCount++
				if (secondCount > 40) {
					clearInterval(changeAnimation)
					this.currentScean.renderer.clear()
					this.currentScean.renderer.draw()
					this.currentScean.renderer.animateText(
						"Thanos is a piece of shit, 😢",
						10,
						10,
						25
					)
				}
			} else {
				this.currentScean.renderer.clear()
				this.currentScean.update(false)
				this.currentScean.renderer.write("#".repeat(80 * count), 0, 0)
				this.currentScean.renderer.draw()
				count++
			}
		}, 0)
	}
}
