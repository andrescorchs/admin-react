import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "./Todo";


it("should render Todo component", () => {
    render(<Todo />);
    const todoelement = screen.getByTestId("todo-test");
    expect(todoelement).toBeInTheDocument();
    expect(todoelement).toHaveTextContent("Hola");
})