const cloneArray = require("./clone");

test("clone data array", () => {
  const array =[3, 6, 9];
  expect(cloneArray(array)).toStrictEqual(array)
})
