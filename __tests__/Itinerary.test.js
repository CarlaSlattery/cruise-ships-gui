/* globals describe it expect */
const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("can have ports", () => {
    const dover = jest.fn();
    const calais = jest.fn();

    const itinerary = new Itinerary(["Dover", "Calais"]);
    expect(itinerary.ports).toEqual(["Dover", "Calais"]);
  });
});
