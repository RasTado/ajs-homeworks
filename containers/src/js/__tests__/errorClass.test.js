import Errors from "../errorClass";

test("test exp error", () => {
  const testError = new Errors();
  expect(testError.translate(1)).toBe("Some error 1");
});

test("test unexp error", () => {
  const testError = new Errors();
  expect(testError.translate(5)).toBe("Unknown error");
});
