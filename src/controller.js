(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
      });
    }
    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url(
        '${backgrounds[backgroundIndex % backgrounds.length]}'
      )`;
        backgroundIndex += 1;
      }, 1000);
    }
    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }
    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portsElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portsElement.offsetTop + 32}px`;
      shipElement.style.left = `${portsElement.offsetLeft - 32}px`;
    }
    setSail() {
      const ship = this.ship;
      //   console.log(ship.itinerary);
      //   console.log(ship.currentPort);
      //console.log(ship);
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      if (!nextPortElement) {
        alert("End of the line!");
      }
      this.renderMessage(`Now departing ${ship.currentPort.name}`);
      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (nextPortElement && shipLeft === nextPortElement.offsetLeft - 32) {
          ship.setSail();
          ship.dock();
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 10);
      console.log(ship.currentPort);

      this.updateDisplay();
    }
    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }
    updateDisplay() {
      const currentPortDisplay = document.querySelector("#current");

      const nextPortDisplay = document.querySelector("#next");
      const currentPortName = ship.currentPort.name;
      const currentPortIndex = itinerary.ports.indexOf(ship.currentPort);
      const nextPort = itinerary.ports[currentPortIndex + 1];
      const nextPortName = nextPort.name;

      if (!nextPort) {
        nextPortDisplay.innerHTML = `End of the line`;
      } else {
        currentPortDisplay.innerHTML = `Current Port: ${currentPortName}`;
        nextPortDisplay.innerHTML = `Next Port: ${nextPortName}`;
      }
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
