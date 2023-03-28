import { render, screen } from "@testing-library/react";
import CallToAction from "../components/CallToAction";

test("Renders the BookingPage heading", () => {
  render(<CallToAction />);
  const headingElement = screen.getByText("hello");
  expect(headingElement).toBeInTheDocument();
});
