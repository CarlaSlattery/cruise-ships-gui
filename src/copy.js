renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";

        portsElement.appendChild(newPortElement);
      });
    }
  }

    
      
    });
  }
      renderShip(ship) {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portsElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portsElement.offsetTop + 32}px`;
      shipElement.style.left = `${portsElement.offsetLeft - 32}px`;
    }

    
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      

      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  }


    
    setSail() {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.index0f(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      if (!nextPortElement) {
        this.renderMessage("End of the line!");
      } else {
        this.renderMessage(`Now departing ${ship.currentPort.name}`);

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          ship.setSail();
          ship.dock();
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }
    renderMessage(message){
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      message.innerHTML = message;

      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }
  }