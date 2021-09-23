import React, { ReactNode, RefObject, useState } from 'react';

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
  Box,
  Button,
  color,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Icon } from './Icon';
import { Input } from './Input';

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
export function ColorPicker({
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
  const colors = [
    'gray.500',
    'red.500',
    'gray.700',
    'green.500',
    'blue.500',
    'blue.800',
    'yellow.500',
    'orange.500',
    'purple.500',
    'pink.500',
  ];

  function handleChange(color: string) {
    // TODO: validate color code
    onChange(color);
  }

  return (
    <FormControl onClick={onClick} w="100%">
      <VStack alignItems="flex-start" spacing={2} w="100%">
        <InputGroup>
          <Center w="100%" justifyContent="center" alignItems="center">
            <Popover variant="picker">
              <PopoverTrigger>
                <Box cursor="pointer" w="100%">
                  <Box w="100%" pointerEvents="none">
                    <Input
                      placeholder={placeholder}
                      error={error}
                      value={placeholder}
                      inputRightElement={
                        <Box p={2} bg={value} borderRadius={100} mr={2} />
                      }
                    />
                  </Box>
                </Box>
              </PopoverTrigger>
              <PopoverContent width="170px" bg="rgba(15,15,15,1)" border={0}>
                <PopoverArrow
                  bg={value ?? 'rgba(15,15,15,1)'}
                  boxShadow="none"
                />
                {value && (
                  <>
                    {' '}
                    <PopoverCloseButton color="white" />
                    <PopoverHeader
                      height="100px"
                      backgroundColor={value}
                      borderTopLeftRadius={5}
                      borderTopRightRadius={5}
                      borderBottom={0}
                      color="white"
                    >
                      <Center height="100%">
                        <Box
                          px={4}
                          borderRadius={1000}
                          backdropFilter="brightness(0.5)"
                        >
                          {value}
                        </Box>
                      </Center>
                    </PopoverHeader>
                  </>
                )}
                <PopoverBody>
                  <Box pb={2}>
                    <SimpleGrid columns={5} pt={2} spacing={2}>
                      {colors.map((c) => (
                        <Button
                          key={c}
                          aria-label={c}
                          background={c}
                          height="22px"
                          width="22px"
                          padding={0}
                          minWidth="unset"
                          borderRadius={3}
                          _hover={{ background: c }}
                          onClick={() => {
                            handleChange(c);
                          }}
                        />
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Input
                    borderRadius={3}
                    marginTop={3}
                    placeholder="red.100"
                    size="sm"
                    // value={color}
                    onChange={(value) => {
                      handleChange(value);
                    }}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Center>
        </InputGroup>
      </VStack>
    </FormControl>
  );
}
