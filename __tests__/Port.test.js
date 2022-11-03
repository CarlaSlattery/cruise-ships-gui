/* globals describe it expect */
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("has a name property", () => {
    const port = new Port("Calais");
    expect(port.name).toEqual("Calais");
  });
});
