import React from 'react';

import {
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface MultiValuesProps {
  values: ({ label: string; value: string } | undefined)[];
  handleRemove: (value: string) => void;
}
export function MultiValues({ handleRemove, values }: MultiValuesProps) {
  return (
    <Box w="100%" pb={2}>
      <Wrap>
        {values.map((value) => {
          if (!value) return null;

          return (
            <WrapItem key={value.value}>
              <Tag size="sm">
                <TagLabel>{value.label}</TagLabel>
                <TagCloseButton onClick={() => handleRemove(value.value)} />
              </Tag>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
}
