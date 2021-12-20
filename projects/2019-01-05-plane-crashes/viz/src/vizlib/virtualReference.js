const getVirtualReference = ({ x, y, width = 20, height = 20 }) =>
  new class VirtualReference {
    getBoundingClientRect() {
      return {
        top: y,
        left: x,
        bottom: y + height,
        right: x + width,
        width,
        height,
      }
    }

    get clientWidth() {
      return this.getBoundingClientRect().width
    }

    get clientHeight() {
      return this.getBoundingClientRect().height
    }
  }()

export default getVirtualReference
