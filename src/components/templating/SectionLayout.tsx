/* eslint-disable react/react-in-jsx-scope */
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
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
    <VStack align="flex-start" spacing={4} {...props}>
      <Heading fontWeight={700} fontSize={20} color="gray.100">
        {label}
      </Heading>
      {children}
    </VStack>
  );
};

// export const FORM_LAYOUT_ELEMENTS = {
//   'h-stack': ({ children, ...props }: { children: ReactNode }) => (
//     <HStack children={children} align="flex-start" spacing={4} {...props} />
//   ),
//   header: ({ label }: ILayoutProps) => (
//     <Text
//       type="error"
//       // color={error ? 'red.500' : 'gray.400'}
//       pt={2}
//       pb={2}
//       fontWeight="bold"
//       fontSize={14}
//     >
//       {label}
//     </Text>
//   ),
// };
