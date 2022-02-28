export default class SceanManager {
	constructor(Scean) {
		this.currentScean = new Scean()
		this.currentScean.changeScean = this.changeScean
		this.updateLoop = setInterval(() => {
			this.currentScean.update()
		}, 0)
	}

	changeScean = (Scean) => {
		window.onkeydown = undefined
		window.onkeyup = undefined
		clearInterval(this.updateLoop)
		let count = 0
		let secondCount = 1
		let change = true
		var changeAnimation = setInterval(() => {
			if (count > 40) {
				// Ending the transition with change in scean
				if (change) {
					//Change Scean
					change = false
					this.currentScean = new Scean()
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

				// End transition and init the next scean
				if (secondCount > 40) {
					clearInterval(changeAnimation)
					window.onkeydown = this.currentScean.onKeyDown
					window.onkeyup = this.currentScean.onKeyUp
					this.updateLoop = setInterval(() => {
						this.currentScean.update()
					}, 0)
				}
			} else {
				// Start transition
				this.currentScean.renderer.clear()
				this.currentScean.update(false)
				this.currentScean.renderer.write("#".repeat(80 * count), 0, 0)
				this.currentScean.renderer.draw()
				count++
			}
		}, 10)
	}
}
