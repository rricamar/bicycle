import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders components", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll("my-component").length).toBe(1);
  expect(container.querySelectorAll("bicycle-avatar").length).toBe(1);
});
