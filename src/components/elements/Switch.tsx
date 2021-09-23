import React, {
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from 'react';

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
export function Switch({
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
  options,
  helperText,
  inputRightElement,
  onBlur,
  icon,
  value,
}: IInput) {
  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>(
    {}
  );
  const activeOptions = useMemo(() => {
    return options.filter((option) => !selectedValues[option.value]);
  }, [selectedValues, options]);

  function handleRemove(value: string) {
    console.log('remove', selectedValues);
  }

  function handleClick(value: string) {
    console.log('CLICKED', value, selectedValues[value], selectedValues);
    if (selectedValues[value]) {
      setSelectedValues({ ...selectedValues, [value]: false });
    } else {
      setSelectedValues({ ...selectedValues, [value]: true });
    }
  }
  // useEffect(() => {
  //   if (onChange)
  //     onChange(
  //       Object.entries(selectedValues)
  //         .filter(([_key, value]) => value)
  //         .map(([key]) => key)
  //     );
  // }, [selectedValues]);

  return (
    <FormControl onClick={onClick} w="100%">
      <VStack spacing={4} h="100%" justifyContent="center" w="100%">
        <HStack
          h="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          w="100%"
          spacing={2}
        >
          {options.map((option) => {
            const isActive = !!selectedValues[option.value];
            console.log('is active', isActive);
            return (
              <Box>
                <Button
                  bg={isActive ? 'red' : 'rgba(0,0,0,.4)'}
                  key={option.value}
                  borderRadius={100}
                  onClick={() => handleClick(option.value)}
                  fontSize={12}
                  px={6}
                  py={0}
                  color="gray.100"
                  fontWeight={600}
                >
                  {option.label}
                </Button>
              </Box>
            );
          })}
        </HStack>
      </VStack>
    </FormControl>
  );
}
