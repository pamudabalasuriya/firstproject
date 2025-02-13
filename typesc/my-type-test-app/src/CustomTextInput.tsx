import React from 'react';

interface CustomTextInputprops {
    onChange: (value: string) => void;
    value?: string;
    label: string;
    idPrefix: string;
    autoFocus?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputprops> = ({
    value,
    onChange,
    label,
    idPrefix,
    autoFocus,
}) => {
    const inputId = `${idPrefix} - input`; // Fixed the typo here

    return (
        <div>
            <label htmlFor={inputId}>{label}</label> {/* Added label text */}
            <input
                id={inputId}
                type="text"
                className="form-control"
                value={value}
                onChange={(event): void => onChange(event.target.value)}
                autoFocus={autoFocus}
            />
        </div>
    );
};
