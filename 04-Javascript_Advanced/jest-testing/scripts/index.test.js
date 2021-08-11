import { getName } from "./index.js";

it("Should return the string 'Stu, 28 years old.'", () => {
  const output = getName("Stu", 28);
  expect(output).toBe("Stu, 28 years old.");
});

it("Should return the string 'Bruce, 15 years old.'", () => {
  const output = getName("Bruce", 15);
  expect(output).toBe("Bruce, 15 years old.");
});
