import { render } from "@testing-library/react";
import React from "react";
import ArrayInput from "../components/ArrayInput";

describe("ArrayInput Component", () => {
    const mockOnArrayChange = jest.fn();

    it("renders the input element", () => {
        render(<ArrayInput onArrayChange={mockOnArrayChange} />);
    })
})