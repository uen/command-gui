import React, { ReactNode, RefObject } from 'react';

import {
  FormControl,
  InputGroup,
  Select as RNSelect,
  InputLeftElement,
  Center,
  Text,
  InputRightElement,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Icon } from './Icon';

interface IInput {
  name?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  options: { label: string; value: string }[];
  icon?: IconProp;
  inputRef?: RefObject<any>;
  onChange?: (value: string) => void;
  value?: string | number;
  onBlur?: () => void;
  inputRightElement?: ReactNode;
  required?: boolean;
  readOnly?: boolean;
  error?: boolean;
  onClick?: () => void;
  cursor?: string;
  disabled?: boolean;
  onKeyDown?: (event: any) => void;
  onFocus?: (event: any) => void;
  helperText?: string;
  min?: number;
  max?: number;
  placeholder?: string;
}
export function Select({
  required,
  readOnly,
  error,
  cursor,
  disabled,
  placeholder,
  name,
  onChange,
  min,
  max,
  type,
  onClick,
  options = [],
  inputRef,
  onFocus,
  onKeyDown,
  helperText,
  inputRightElement,
  onBlur,
  icon,
  value,
}: IInput) {
  return (
    <FormControl onClick={onClick} w="100%">
      <VStack alignItems="flex-start" spacing={2} w="100%" p={0}>
        <InputGroup>
          {icon ? (
            <InputLeftElement
              pointerEvents="none"
              p={6}
              pl={6}
              children={<Icon icon={icon} size={15} color="gray.300" />}
            />
          ) : null}
          <RNSelect
            type={type}
            name={name}
            cursor={cursor}
            min={min}
            max={max}
            bg="rgba(0,0,0,.3)"
            disabled={disabled}
            fontSize={14}
            onFocusCapture={onFocus}
            onKeyDown={onKeyDown}
            size="lg"
            readOnly={readOnly}
            colorScheme="brand"
            color="gray.200"
            border="none"
            _placeholder={{ color: 'gray.300' }}
            _focus={{
              borderColor: error ? 'red.500' : 'brand.200',
            }}
            borderRadius={0}
            onChange={(event: any) => {
              if (onChange) onChange(event?.target?.value);
            }}
            onBlur={onBlur}
            value={value}
            isInvalid={error}
            ref={inputRef}
          >
            {!required && (
              <option value="" selected>
                Select your option...
              </option>
            )}

            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </RNSelect>
          {inputRightElement ? (
            <InputRightElement
              width="auto"
              alignItems="right"
              pointerEvents="none"
              p={4}
            >
              {inputRightElement}
            </InputRightElement>
          ) : null}
        </InputGroup>
      </VStack>
      {helperText || error ? (
        <Text
          type="error"
          color={error ? 'red.500' : 'gray.400'}
          pt={2}
          pb={2}
          fontSize={14}
        >
          {error ?? helperText}
        </Text>
      ) : null}
    </FormControl>
  );
}
