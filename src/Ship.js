class Ship {
  constructor(port) {
    this.currentPort = port;
  }
  setSail() {
    return (this.currentPort = null);
  }
  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
