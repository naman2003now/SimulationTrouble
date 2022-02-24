import TicTacToe from "./Sceans/TicTacToe/TIcTacToe.js"

export default class SceanManager{
    constructor(){
        this.sceans = [TicTacToe]
        this.currentSceanIndex = 0
        this.currentScean = new this.sceans[this.currentSceanIndex]()
    }
}