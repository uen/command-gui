import React, { useEffect, useMemo, useState } from 'react';

import { VStack, Box } from '@chakra-ui/react';
import { isEmpty } from 'lodash';

import { MultiValues } from 'components/templating/MultiValues';
import { Select } from './Select';

interface IInput {
  name: string;
  options: { label: string; value: string }[];
  onChange?: (value: string[]) => void;
  value?: string | number;
}

export function MultiSelect({ onChange, options }: IInput) {
  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    if (onChange)
      onChange(
        Object.entries(selectedValues)
          .filter(([_key, value]) => value)
          .map(([key]) => key)
      );
  }, [selectedValues]);

  const activeOptions = useMemo(() => {
    return options.filter((option) => !selectedValues[option.value]);
  }, [selectedValues, options]);

  function handleRemove(value: string) {
    setSelectedValues({ ...selectedValues, [value]: false });
  }

  const hasValues = !isEmpty(Object.keys(selectedValues));
  return (
    <Box w="100%">
      <VStack spacing={3}>
        <Select
          options={activeOptions}
          required={false}
          onChange={(value) => {
            setSelectedValues({ ...selectedValues, [value]: true });
          }}
        />
        {hasValues && (
          <MultiValues
            handleRemove={handleRemove}
            values={Object.entries(selectedValues)
              .filter(([_key, value]) => value)
              .map(([_key]) => options.find((option) => option.value === _key))
              .filter((value) => value)}
          />
        )}
      </VStack>
    </Box>
  );
}
