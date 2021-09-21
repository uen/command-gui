import { Block } from 'components/elements/Block';
import React from 'react';
import { IElementProps } from '../../templator';
import { Input } from '../elements/Input';

export function InputElement({
  value,
  ref,
  name,
  error,
  icon,
  max,
  label,
  helper,
  min,
  inputType,
  onChange,
  validate,
  disabled,
  required,
}: IElementProps) {
  return (
    <Block>
      <Input
        inputRef={ref}
        label={label}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        name={name}
        onBlur={() => validate(false)}
        type={inputType}
        icon={icon}
        value={value}
        error={error}
        onChange={(value: any) => {
          return onChange(value);
        }}
        helperText={error || helper}
      />
    </Block>
  );
}
