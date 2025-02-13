import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomTextInput } from './CustomTextInput';

const changehandler = jest.fn(); // Corrected syntax for jest.fn()

test('renders the text input', () => {
    const { rerender, asFragment } = render(
        <CustomTextInput
            onChange={changehandler}
            value='original value'
            label='My Label'
            idPrefix='myTest'
        />
    );

    // Corrected the `toMatchInlineSnapshot` syntax and indentation
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
        <div>
            <label for="myTest-input">My Label</label>
            <input
                class="form-control"
                id="myTest-input"
                type="text"
                value="original value"
            />
        </div>
    </DocumentFragment>
    `);

    // Get the input field by label text
    const textInput = screen.getByLabelText('My Label');
    expect(textInput).toHaveValue('original value'); // Check initial value

    // Simulate user changing the input
    fireEvent.change(textInput, { target: { value: 'new value' } });
    expect(changehandler).toHaveBeenCalledWith('new value'); // Corrected the spelling of "toHaveBeenCalledWith"

    // Rerender the component with new value
    rerender(
        <CustomTextInput
            onChange={changehandler}
            value='new value'
            label='My Label'
            idPrefix='myTest'
        />
    );

    // Make sure the updated value is correctly rendered
    expect(screen.getByLabelText('My Label')).toHaveValue('new value');
});
