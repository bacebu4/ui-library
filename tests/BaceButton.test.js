import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BaceButton } from "../src/index";

describe("BaceButton", () => {
  it("displays text", () => {
    const SAMPLE_TEXT = "sample text";
    render(<BaceButton>{SAMPLE_TEXT}</BaceButton>);

    expect(screen.getByText(SAMPLE_TEXT)).toBeInTheDocument();
  });

  it("calls the onChange callback handler", async () => {
    const SAMPLE_TEXT = "sample text";

    const onClick = jest.fn();

    render(<BaceButton onClick={onClick}>{SAMPLE_TEXT}</BaceButton>);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("is not clickable when disabled", async () => {
    const SAMPLE_TEXT = "sample text";

    const onClick = jest.fn();

    render(
      <BaceButton disabled onClick={onClick}>
        {SAMPLE_TEXT}
      </BaceButton>
    );

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
