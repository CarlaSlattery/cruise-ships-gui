class Port {
  constructor(name, ships) {
    this.name = name;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    const index = this.ships.indexOf(ship);
    this.ships.splice(index, 1);
  }
}

module.exports = Port;
