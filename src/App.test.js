import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders the hero heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Kamini Yuvaraju/);
});
