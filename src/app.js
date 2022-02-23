import Renderer from "./renderer.js"

var gameSettings = {
	charactersInOneRow: 50,
}

var root = document.getElementById("root")
var terminal = document.getElementById("terminal")
var terminalSize = 0
var renderer = new Renderer(
    "Hello, world_",
	gameSettings.charactersInOneRow * gameSettings.charactersInOneRow
)

const updateFrameBuffers = () => {
	terminalSize = Math.min(window.innerHeight, window.innerWidth)

	root.style.height = terminalSize + "px"
	root.style.width = terminalSize + "px"

	terminal.style.setProperty(
		"--font-size",
		terminalSize / (gameSettings.charactersInOneRow  + 1)+ "px"
	)
	terminal.innerHTML = renderer.renderText()
}

window.onresize = updateFrameBuffers
updateFrameBuffers()
