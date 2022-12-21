const Animal = require('./animal.model.js')

class Lion extends Animal {

    constructor() { 
        super("roar")
    }
    
}

module.exports = Lion;