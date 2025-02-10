// Globally enabled in vitest.config.ts
// import { describe, test, expect, it, vi, assert } from 'vitest';

import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { App } from './App';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Vite + React');

    // Get by text using the React testing library
    const text = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(text.textContent).toBeTruthy();

    // or testing library jest dom style
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
  });

  it('Click the button', () => {
    const wrapper = render(<App />);
    const button = wrapper.container.querySelector('button');

    assert(button);

    // button mounts with count in 0
    expect(button.textContent).toBe('count is 0');

    fireEvent(
      getByText(button, 'count is 0'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    // The count hook is working
    expect(button.textContent).toBe('count is 1');
  });

  it('Click the Vite logo', async () => {
    // Example with the user event library
    render(<App />);
    const user = userEvent.setup();

    const spyAnchorTag = vi.spyOn(user, 'click');
    await user.click(screen.getByAltText('Vite logo'));

    expect(spyAnchorTag).toHaveBeenCalledOnce();
  });
});
