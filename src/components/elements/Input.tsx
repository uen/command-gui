import React, { ReactNode, RefObject } from 'react';

import {
  FormControl,
  InputGroup,
  Input as RNInput,
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
  name: string;
  label: string;
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
}
export function Input({
  label,
  name,
  required,
  readOnly,
  error,
  cursor,
  disabled,
  onChange,
  min,
  max,
  type,
  onClick,
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
    <FormControl mb={error || helperText ? 1 : 3} onClick={onClick}>
      <VStack alignItems="flex-start" spacing={2}>
        <VStack
          w="100%"
          spacing={1}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Text fontSize={14} color="white" fontWeight="bold" flex={1}>
            {label}
          </Text>
          {/* <Text fontSize={12} color="white" textAlign="left">
            Use the given as the commit message. If multiple -m options are
            given, their values are concatenated as separate paragraphs.
          </Text> */}
        </VStack>
        <InputGroup>
          <Center w="100%" justifyContent="center" alignItems="center">
            {icon ? (
              <InputLeftElement
                pointerEvents="none"
                p={6}
                pl={6}
                children={<Icon icon={icon} size={15} color="gray.300" />}
              />
            ) : null}
            <RNInput
              type={type}
              name={name}
              cursor={cursor}
              min={min}
              max={max}
              placeholder="Enter your commit messag"
              bg="rgba(0,0,0,.3)"
              disabled={disabled}
              fontSize={14}
              onFocusCapture={onFocus}
              onKeyDown={onKeyDown}
              readOnly={readOnly}
              colorScheme="brand"
              border="none"
              _focus={{
                borderColor: error ? 'red.500' : 'brand.200',
              }}
              borderRadius={0}
              onChange={(event: any) => {
                if (onChange) onChange(event?.target?.value);
              }}
              onBlur={onBlur}
              value={value}
              // placeholder={`${label}${required ? ' *' : ''}`}
              isInvalid={error}
              ref={inputRef}
              p={7}
              pl={icon ? 12 : 4}
            />
            {inputRightElement ? (
              <InputRightElement
                width="auto"
                alignItems="right"
                pointerEvents="none"
                p={4}
                children={inputRightElement}
              />
            ) : null}
          </Center>
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
