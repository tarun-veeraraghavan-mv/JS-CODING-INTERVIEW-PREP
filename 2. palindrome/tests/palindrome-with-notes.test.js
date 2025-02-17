const { palindrome1, palindrome2 } = require("../with-notes/palindrome");

test("first solution of palindrome shoudl work", () => {
  expect(palindrome1("aba")).toBe(true);
});

test("second solution of palindrome should work", () => {
  expect(palindrome2("aba aba")).toBe(true);
});

test("second solution of palindrome should not work", () => {
  expect(palindrome2("aba bpb")).toBe(false);
});