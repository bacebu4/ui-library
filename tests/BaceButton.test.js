import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BaceButton } from "../src/index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("trigger onClick prop", () => {
  const onClick = jest.fn();
  act(() => {
    render(<BaceButton onClick={onClick}>Hello</BaceButton>, container);
  });

  const button = document.querySelector("button");
  expect(button.innerHTML).toBe("Hello");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Hello");

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onClick).toHaveBeenCalledTimes(6);
  expect(button.innerHTML).toBe("Hello");
});
