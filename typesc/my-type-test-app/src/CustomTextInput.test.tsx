import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomTextInput } from './CustomTextInput';
import '@testing-library/jest-dom'; // Import this to enable custom Jest matchers like `toHaveValue`


const changehandler = jest.fn();

test('renders the text input', () => {
    const { rerender, asFragment } = render(
        <CustomTextInput
            onChange={changehandler}
            value='original value'
            label='My Label'
            idPrefix='myTest'
        />
    );

    // Corrected inline snapshot usage
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    <label
      for="myTest - input"
    >
      My Label
    </label>
     
    <input
      class="form-control"
      id="myTest - input"
      type="text"
      value="original value"
    />
  </div>
</DocumentFragment>
`);

    // Check if input has the original value
    const textInput = screen.getByLabelText('My Label');
    expect(textInput).toHaveValue('original value');

    // Simulate a user change
    fireEvent.change(textInput, { target: { value: 'new value' } });
    expect(changehandler).toHaveBeenCalledWith('new value');

    // Rerender the component with the new value
    rerender(
        <CustomTextInput
            onChange={changehandler}
            value='new value'
            label='My Label'
            idPrefix='myTest'
        />
    );

    // Ensure the updated value is reflected in the input
    expect(screen.getByLabelText('My Label')).toHaveValue('new value');
});
