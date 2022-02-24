import SceanManager from "./SceanManager.js"

// The resoloution = 80 x 40

var gameSettings = {
	charactersInOneRow: 25,
}

var root = document.getElementById("root")
var terminal = document.getElementById("terminal")
var terminalSize = 0
var sceanManager = new SceanManager()

const updateFrameBuffers = () => {
	terminalSize = Math.min(window.innerHeight, window.innerWidth)

	root.style.height = terminalSize + "px"
	root.style.width = terminalSize + "px"

	terminal.style.setProperty(
		"--font-size",
		terminalSize / (2 * gameSettings.charactersInOneRow) + "px"
	)
}

var updateLoop = setInterval(() => {
	sceanManager.currentScean.update()
}, 0)

window.onresize = updateFrameBuffers
window.onkeydown = sceanManager.currentScean.onKeyDown
window.onkeyup = sceanManager.currentScean.onKeyUp
updateFrameBuffers()
setTimeout(() => {
	clearInterval(updateLoop)
	console.log("changing")
	sceanManager.changeScean()
}, 3000)
