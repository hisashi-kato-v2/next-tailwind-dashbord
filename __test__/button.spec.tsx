import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

describe("Button component", () => {
  test("handles onClick event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={handleClick}>Test Button</PrimaryButton>
    );
    fireEvent.click(getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // test("applies the correct styles for the primary variant", () => {
  //   const { getByText } = render(
  //     <PrimaryButton variant="primary">Test Button</PrimaryButton>
  //   );
  //   expect(getByText("Test Button")).toHaveClass(
  //     "bg-blue-500 hover:bg-blue-700 text-white"
  //   );
  // });

  // test("applies the correct styles for the primary variant", () => {
  //   const { getByText } = render(
  //     <PrimaryButton variant="primary">Test Button</PrimaryButton>
  //   );
  //   expect(getByText("Test Button")).toHaveClass(
  //     "bg-blue-500 hover:bg-blue-700 text-white"
  //   );
  // });
});
