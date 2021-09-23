import React, { useState } from 'react';

import { Box, Button, VStack } from '@chakra-ui/react';

import { MultiValues } from 'components/templating/MultiValues';
import { isEmpty } from 'lodash';
import { Input } from './Input';

interface IInput {
  placeholder: string;
  buttonLabel?: string;
}
export function MultiInput({ buttonLabel = 'Add', placeholder }: IInput) {
  const [currentInputValue, setCurrentInputValue] = useState<string>('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  function handleAdd() {
    if (currentInputValue === '') return;
    setSelectedValues([...selectedValues, currentInputValue]);
    setCurrentInputValue('');
  }

  function handleRemove(removeValue: string) {
    setSelectedValues(selectedValues.filter((value) => value !== removeValue));
  }

  function handleChange(value: string) {
    setCurrentInputValue(value);
  }

  const hasValues = !isEmpty(selectedValues);
  return (
    <Box w="100%">
      <VStack w="100%">
        <Input
          placeholder={placeholder}
          required
          value={currentInputValue}
          inputRightElement={
            <Button h="1.75rem" size="sm" onClick={handleAdd}>
              {buttonLabel}
            </Button>
          }
          onChange={handleChange}
        />
        {hasValues && (
          <MultiValues
            handleRemove={handleRemove}
            values={selectedValues.map((value) => ({ label: value, value }))}
          />
        )}
      </VStack>
    </Box>
  );
}
