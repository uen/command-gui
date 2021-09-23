import { Grid, GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const GridLayout = ({
  label,
  children,
  templateColumns = 'repeat(2, 1fr)',
  ...props
}: {
  label: string;
  children: ReactNode;
  templateColumns?: string;
}) => {
  console.log('hgri dlayout', children);
  return (
    <SimpleGrid
      alignItems="flex-start"
      templateColumns={templateColumns}
      spacing={4}
      w="100%"
      {...props}
    >
      {children}
    </SimpleGrid>
  );
};
