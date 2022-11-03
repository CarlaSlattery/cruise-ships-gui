/* globals describe it expect */
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a name property", () => {
    const port = new Port("Calais");
    expect(port.name).toEqual("Calais");
  });
});
