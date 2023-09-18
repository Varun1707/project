import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, test, expect } from "vitest";

const { container } = render(<App />);

describe("Components Check", () => {
  test("Button Check", () => {
    const buttonElements = container.querySelectorAll("button");
    expect(buttonElements.length).toBe(19);
  });

  test("Input Element Check", () => {
    const inputElement = container.querySelector("input");
    expect(inputElement).toBeInTheDocument;
  });

  test("Output Element Check", () => {
    render(<App />);
    const outputElement = screen.getByTestId("result");
    expect(outputElement.innerHTML).toBe("0");
  });
});

describe("Calculator Check", () => {
  test("Calculator Operation Element Check", () => {
    render(<App />);
    expect(screen.getByText("+")).toBeInTheDocument;
    expect(screen.getByText("-")).toBeInTheDocument;
    expect(screen.getByText("*")).toBeInTheDocument;
    expect(screen.getByText("÷")).toBeInTheDocument;
    expect(screen.getByText(".")).toBeInTheDocument;
    expect(screen.getByText("C")).toBeInTheDocument;
    expect(screen.getByText("%")).toBeInTheDocument;
    expect(screen.getByText("+/-")).toBeInTheDocument;
  });
});

describe("Calculations Check", () => {
  test("Addition", () => {
    render(<App />);
    var input = screen.getByTestId("equation");
    const submit = screen.getByTestId("equals")
    fireEvent.change(input,{target:{value:"3+7"}})
    fireEvent.click(submit)

    try {
      expect(screen.getByTestId("result").innerHTML).toBe("10");
    } catch (error) {
      expect(screen.getByTestId("result").innerHTML).toBe(10);
    }
  });

  test("Subtraction", () => {
    render(<App />);
    var input = screen.getByTestId("equation");
    const submit = screen.getByTestId("equals")
    fireEvent.change(input,{target:{value:"3-7"}})
    fireEvent.click(submit)

    try {
      expect(screen.getByTestId("result").innerHTML).toBe("-4");
    } catch (error) {
      expect(screen.getByTestId("result").innerHTML).toBe(-4);
    }
  });

  test("Multiplication", () => {
    render(<App />);
    var input = screen.getByTestId("equation");
    const submit = screen.getByTestId("equals")
    fireEvent.change(input,{target:{value:"3*7"}})
    fireEvent.click(submit)

    try {
      expect(screen.getByTestId("result").innerHTML).toBe("21");
    } catch (error) {
      expect(screen.getByTestId("result").innerHTML).toBe(21);
    }
  });

  test("Division", () => {
    render(<App />);
    var input = screen.getByTestId("equation");
    const submit = screen.getByTestId("equals")
    fireEvent.change(input,{target:{value:"5÷2"}})
    fireEvent.click(submit)

    try {
      expect(screen.getByTestId("result").innerHTML).toBe("2.5");
    } catch (error) {
      expect(screen.getByTestId("result").innerHTML).toBe(2.5);
    }
  });

  test("Percentage", () => {
    render(<App />);
    var input = screen.getByTestId("equation");
    const submit = screen.getByTestId("equals")
    fireEvent.change(input,{target:{value:"50-50%"}})
    fireEvent.click(submit)

    try {
      expect(screen.getByTestId("result").innerHTML).toBe("25");
    } catch (error) {
      expect(screen.getByTestId("result").innerHTML).toBe(25q);
    }
  });


});
