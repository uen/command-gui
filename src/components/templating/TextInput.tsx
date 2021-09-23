import { Box, VStack } from '@chakra-ui/react';
import { Block } from 'components/elements/Block';
import { InputLabel } from 'components/InputLabel';
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
  placeholder,
  onChange,
  validate,
  disabled,
  required,
}: IElementProps) {
  return (
    <Box w="100%">
      <VStack w="100%" alignItems="flex-start">
        {label && <InputLabel label={label}></InputLabel>}
        <Input
          inputRef={ref}
          required={required}
          disabled={disabled}
          min={min}
          max={max}
          placeholder={placeholder}
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
      </VStack>
    </Box>
  );
}
