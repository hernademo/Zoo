class Animal {
    constructor(sound) {
        this._sound = sound;
    }

    speak(whatToSpeak) {
        
        if (whatToSpeak === null || whatToSpeak.trim() === "") {
            throw new Error("Empty sound");
        }

        const words = whatToSpeak.split(' ');
        
        let arrayToSpeak =   words.flatMap(e => [this._sound, e]).slice(1);
        
        arrayToSpeak.push(this._sound)
        
        return arrayToSpeak.join(' ');
    }
}

module.exports = Animal;