const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(1, 2);

describe("App", function() {
  describe("sayHello", () => {
    it("sayHello should return Hello", function() {
      assert.equal(sayHelloResult, "Hello");
    });
    it("sayHello should return type string", () => {
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers", () => {
    it("addNumbers should be above 5", () => {
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers should return type number", () => {
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
