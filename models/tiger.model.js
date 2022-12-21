const Animal = require('./animal.model.js')

class Tiger extends Animal {

    constructor() { 
        super("grrr")
    }
    
}

module.exports = Tiger;