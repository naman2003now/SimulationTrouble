import Renderer from "./renderer.js"

var gameSettings = {
	charactersInOneRow: 25,
}

var root = document.getElementById("root")
var terminal = document.getElementById("terminal")
var terminalSize = 0
var renderer = new Renderer("", 50 * 51 + 10)

const updateFrameBuffers = () => {
	terminalSize = Math.min(window.innerHeight, window.innerWidth)

	root.style.height = terminalSize + "px"
	root.style.width = terminalSize + "px"

	terminal.style.setProperty(
		"--font-size",
		terminalSize / (2 * gameSettings.charactersInOneRow) + "px"
	)
	terminal.innerHTML = renderer.renderText()
}

window.onresize = updateFrameBuffers
updateFrameBuffers()
