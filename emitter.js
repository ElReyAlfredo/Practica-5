function Emitter() {
  this.events = {};
}
//METODOS
Emitter.prototype.on = function (type, listener) {
  //Mete una funcion y la asocia al objeto de una llave
  //Este modulo exporta un constructor
  this.events[type] = this.events[type] || [];

  this.events[type].push(listener); //En la llave type meto el listener
};

Emitter.prototype.emit = function (type) {
  //Para ese listener(type) quiero que lo invoques(listener()
  if (this.events[type]) {
    this.events[type].forEach((listener) => listener());
  }
};

module.exports = Emitter;
