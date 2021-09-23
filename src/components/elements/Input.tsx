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
  icon?: IconProp;
  inputRef?: RefObject<any>;
  onChange?: (value: string) => void;
  value?: string | number;
  onBlur?: () => void;
  inputRightElement?: ReactNode;
  required?: boolean;
  readOnly?: boolean;
  error?: string;
  onClick?: () => void;
  cursor?: string;
  disabled?: boolean;
  onKeyDown?: (event: any) => void;
  onFocus?: (event: any) => void;
  helperText?: string;
  min?: number;
  max?: number;
  placeholder: string;
}
export function Input({
  name,
  required,
  readOnly,
  error,
  cursor,
  disabled,
  placeholder,
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
    <FormControl onClick={onClick} w="100%">
      <VStack alignItems="flex-start" spacing={2} w="100%">
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
              placeholder={placeholder}
              bg="rgba(0,0,0,.3)"
              disabled={disabled}
              fontSize={14}
              size="lg"
              onFocusCapture={onFocus}
              onKeyDown={onKeyDown}
              readOnly={readOnly}
              color="gray.200"
              border="none"
              _placeholder={{ color: 'gray.400' }}
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
              // p={7}
              pl={icon ? 12 : undefined}
              // pr={inputRightElement ? 4 : undefined}
            />
            {inputRightElement ? (
              <InputRightElement
                width="auto"
                alignItems="right"
                h="100%"
                pr={2}
                // p={4}
              >
                <HStack h="100%">{inputRightElement}</HStack>
              </InputRightElement>
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
