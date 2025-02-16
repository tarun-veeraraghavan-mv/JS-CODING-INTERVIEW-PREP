const {
  reverse1,
  reverse2,
  reverse3,
} = require("../with-notes/reverse-a-string");

// REVERSING STRING WITH NOTES FUNCTION TESTS
test("reverse1 should reverse a string", () => {
  expect(reverse1("apple")).toBe("elppa");
});

test("reverse 2 should reverse a string", () => {
  expect(reverse2("hello")).toBe("olleh");
});

test("reverse 3 should reverse a stirng", () => {
  expect(reverse3("reverse a string")).toBe("gnirts a esrever");
});
