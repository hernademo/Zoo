const  Tiger = require('./models/tiger.model.js')
const Lion = require('./models/lion.model.js')

const tiger = new Tiger();
console.log(tiger.speak("Lions suck"));

const lion = new Lion();
console.log(tiger.speak("Lions suck"));