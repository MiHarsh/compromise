import View from '../../View.js'

class Chunks extends View {
  constructor(document, pointer, groups) {
    super(document, pointer, groups)
    this.viewType = 'Chunks'
    console.log(this.fullPointer)
  }
}
export default Chunks