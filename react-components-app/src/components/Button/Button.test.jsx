import { render } from '@testing-library/react';
import Button from './Button';

test("should render Button", () => {
  const label = "Click me!";
  render(<Button label={label} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent("Click me!");
});