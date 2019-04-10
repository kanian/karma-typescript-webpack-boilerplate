import { UniqueInOrder } from "../src/UniqueInOrder";
//import "jasmine";

describe("Given an ordered array of integers", function() {
  it("should return an array containing unique and ordered numbers", function() {
    let uniqueInOrder = new UniqueInOrder();
    const uniqueAndOrdered = uniqueInOrder.order([1, 2, 2, 3, 3]);

    expect(uniqueAndOrdered).toEqual([1, 2, 3]);
  });
});
describe("Given a string made of sorted characters", function() {
  it("should return an array containing unique and ordered characters", function() {
    let uniqueInOrder = new UniqueInOrder();
    const uniqueAndOrdered = uniqueInOrder.order("12233");

    expect(uniqueAndOrdered).toEqual(["1", "2", "3"]);
  });
});
describe("Given a disordered array of integers", function() {
  it("should return an array containing unique and ordered numbers", function() {
    let uniqueInOrder = new UniqueInOrder();
    const uniqueAndOrdered = uniqueInOrder.order([1, 2, 4, 3, 3]);

    expect(uniqueAndOrdered).toEqual([1, 2, 3, 4]);
  });
});
describe("Given a string made of disordered characters", function() {
  it("should return an array containing unique and ordered characters", function() {
    let uniqueInOrder = new UniqueInOrder();
    const uniqueAndOrdered = uniqueInOrder.order("12433");

    expect(uniqueAndOrdered).toEqual(["1", "2", "3", "4"]);
  });
});
