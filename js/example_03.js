//  разобрать пример с вебинара модуль 3 -1

const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};

const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
  size: null,
  stuffings: [],
  sauces: [],
  addStuffing(stuffing) {
    if (
      !this.stuffings.includes(stuffing) &&
      stuffing.toUpperCase() in STUFFING
    ) {
      this.stuffings.push(stuffing.toUpperCase());
    }
  },
  removeStuffing(stuffing) {
    if (this.stuffings.includes(stuffing)) {
      const indexToDelete = this.stuffings.indexOf(stuffing);

      this.stuffings.splice(indexToDelete, 1);
    }
  },
  addSauce(sauce) {
    if (!this.sauces.includes(sauce) && sauce.toUpperCase() in SAUCES) {
      this.sauces.push(sauce.toUpperCase());
    }
  },
  removeSauce(sauce) {
    if (this.sauces.includes(sauce)) {
      const indexToDelete = this.sauces.indexOf(sauce);

      this.sauces.splice(indexToDelete, 1);
    }
  },
  getTotalProperty(property) {
    const getPropertyForSize = () => SIZES[this.size][property];

    const getPropertyForSauces = () => {
      let total = 0;

      for (const sauce of this.sauces) {
        const prop = SAUCES[sauce][property];

        total += prop;
      }

      return total;
    };

    const getPropertyForStuffing = () => {
      let total = 0;

      for (const stuffing of this.stuffings) {
        const prop = STUFFING[stuffing][property];

        total += prop;
      }

      return total;
    };

    const forSize = getPropertyForSize();
    const forSauces = getPropertyForSauces();
    const forStuffing = getPropertyForStuffing();

    // don't forget to return value, not just console.log
    return forSize + forSauces + forStuffing;
  },
  getPizzaConfig() {
    return {
      price: this.getTotalProperty("price"),
      cal: this.getTotalProperty("cal"),
      time: this.getTotalProperty("time"),
    };
  },
};

pizza.size = "BIG";
pizza.addStuffing("BEACON");
pizza.addStuffing("TOMATO");
pizza.addSauce("bolognese");
pizza.addSauce("MUSTARD");

console.log(pizza.getPizzaConfig());
