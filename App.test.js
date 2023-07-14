import { render, screen } from '@testing-library/react';
import Appsong from './Appsong';

test('renders learn react link', () => {
  render(<Appsong />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
