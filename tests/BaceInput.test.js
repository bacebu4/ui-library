import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BaceInput } from "../src/index";

describe("BaceInput", () => {
  test("has placeholder", () => {
    const SAMPLE_PLACEHOLDER = "sample placeholder";
    render(<BaceInput placeholder={SAMPLE_PLACEHOLDER} />);

    expect(screen.getByPlaceholderText(SAMPLE_PLACEHOLDER)).toBeInTheDocument();
  });

  test("calls the onChange callback handler", async () => {
    const ENTERED_TEXT = "JavaScript";
    const onChange = jest.fn();

    render(<BaceInput onChange={onChange} />);

    await userEvent.type(screen.getByRole("textbox"), ENTERED_TEXT);

    expect(onChange).toHaveBeenCalledTimes(ENTERED_TEXT.length);
  });

  test("displays entered value", async () => {
    const ENTERED_TEXT = "JavaScript";
    render(<BaceInput />);

    await userEvent.type(screen.getByRole("textbox"), ENTERED_TEXT);

    expect(await screen.findByDisplayValue("JavaScript")).toBeInTheDocument();
  });
});
