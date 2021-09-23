import { Heading, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const SectionLayout = ({
  label,
  children,
  ...props
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <VStack align="flex-start" spacing={4} {...props} w="100%">
      <Heading fontWeight={700} fontSize={20} color="gray.100">
        {label}
      </Heading>
      {children}
    </VStack>
  );
};
