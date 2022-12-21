
const Tiger = require('../models/tiger.model.js')
const Lion =  require('../models/lion.model.js') 


describe("Animals Tests", () => {

  test("should be a Lion compare", () => {
    const lion = new Lion();
    let result = lion.speak("I'm a lion");
    expect(result).toBe("I'm roar a roar lion roar");
  });

  test("should be a Tiger compare", () => {
    const tiger = new Tiger();
    let result = tiger.speak("Lions suck");
    expect(result).toBe("Lions grrr suck grrr");
  });

  test("should throw an error", () => {
    const tiger = new Tiger();
    expect(() => tiger.speak("")).toThrow();
  });


})

  